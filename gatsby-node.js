// Dynamic content generation for blogs
const path = require('path')
const crypto = require('crypto')
const dir = require('node-dir')
const matter = require('gray-matter')
const unified = require('unified')
const markdown = require('remark-parse')
const slug = require('remark-slug')
const autoLinkHeadings = require("remark-autolink-headings")

const highlight = require('remark-highlight.js')
const html = require('remark-html')
const algoliasearch = require('algoliasearch')
const authors = require('./src/constants/generated-authors.json')
const categories = require('./src/constants/categories.json')
const highlightedBlogs = require('./src/constants/featured-blogs.json')
const workshops = require('./src/constants/workshops.json')
const blogsPerPage = 5
const highlightedBlogsRegEx = new RegExp(highlightedBlogs.join("|"), 'gi')

var client = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, '9a3c539ada1e49ee00b670534c9c605f');
var index = client.initIndex(process.env.GATSBY_ALGOLIA_BLOG_INDEX);

exports.sourceNodes =  async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  return Promise.all([
    new Promise((resolve, reject) => {
      dir.readFiles('./content/blog', {
        match: /.md$/,
        //exclude: /^\./
      }, (err, content, filename, next) => {
        if (err) throw err

        const { data, content: markdownContent } = matter(content)
        const frontmatter = data.category ? data : { ...data, category: [] }
        const blogId = path.basename(filename, path.extname(filename))

        index.saveObject({
          title: frontmatter.title,
          description: frontmatter.description,
          objectID: blogId,
        });

        unified()
          .use(markdown)
          .use(highlight)
          .use(html)
          .process(markdownContent, function(err, file) {
            const blog = {
              id: blogId,
              parent: null,
              children: [],
              internal: {
                type: `Blog`,
                contentDigest: crypto
                  .createHash(`md5`)
                  .update(JSON.stringify(content))
                  .digest(`hex`),
              },
              frontmatter,
              content: String(file),
            }
            createNode(blog)
            next()
          });
      }, resolve);
    }),

    new Promise((resolve, reject) => {
      dir.readFiles('./content/framework', {
        match: /.md$/,
        //exclude: /^\./
      }, (err, content, filename, next) => {
        if (err) throw err

        const { data: frontmatter, content: markdownContent } = matter(content)
        const url = frontmatter.gitLink.replace(/\/README.md|.md/i, '/')
        unified()
          .use(markdown)
          .use(slug)
          .use(autoLinkHeadings, {
            content: {
              type: "text",
              value: "#",
            },
            linkProperties: {
              className: "phenomic-HeadingAnchor",
            },
          })
          .use(html)
          .use(highlight)
          .process(markdownContent, function(err, file) {
            const doc = {
              id: url,
              parent: null,
              children: [],
              internal: {
                type: `Doc`,
                contentDigest: crypto
                  .createHash(`md5`)
                  .update(JSON.stringify(content))
                  .digest(`hex`),
              },
              frontmatter,
              content: String(file),
            }
            createNode(doc)
            next()
          });
      }, resolve);
    })
  ]);
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return Promise.all([
    new Promise((resolve, reject) => {
      graphql(`
        {
          allBlog {
            edges {
              node {
                id
              }
            }
          }
        }
      `).then(result => {
        const blogs = result.data.allBlog.edges;

        for(let i = 0 ; i < blogs.length ; i += blogsPerPage ) {
          const page = i / blogsPerPage;
          createPage({
            path: `blog${ page === 0 ? '' : ('/page/' + (page + 1) ) }`,
            component: path.resolve(`./src/templates/blogList.js`),
            context: {
              limit: 5,
              start: i,
              highlightedBlogsRegEx,
            }
          })
        }

        blogs.forEach(({ node }, index, records) => {
          createPage({
            path: `blog/${node.id}`,
            component: path.resolve(`./src/templates/blog.js`),
            context: {
              blogId: node.id,
              previousBlogId: (records[index - 1] || records[index + 2]).node.id,
              nextBlogId: (records[index + 1] || records[index - 2]).node.id,
            },
          })
        })

        Object.keys(authors).forEach((authorKey) => {
          createPage({
            path: `author/${authorKey}`,
            component: path.resolve(`./src/templates/author.js`),
            context: {
              authorId: [authorKey]
            },
          })
        })

        Object.keys(categories).forEach((categoryKey) => {
          createPage({
            path: `category/${categoryKey}`,
            component: path.resolve(`./src/templates/category.js`),
            context: {
              categoryId: [categoryKey]
            },
          })
        })
        resolve()
      })
    }).catch(error => {
      console.log(error)
      reject()
    }),
    new Promise((resolve, reject) => {
      graphql(`
        {
          allDoc {
            edges {
              node {
                id
              }
            }
          }
        }
      `).then(result => {
        const docs = result.data.allDoc.edges

        docs.forEach(({ node }) => {
          createPage({
            path: `framework${node.id}`,
            component: path.resolve(`./src/templates/doc.js`),
            context: {
              docId: node.id
            },
          })
        })
        resolve()
      })
    }),
    new Promise((resolve, reject) => {
      Object.keys(workshops).forEach((key) => {
        createPage({
          path: `workshops/${key}`,
          component: path.resolve(`./src/templates/workshop-form.js`),
          context: { key },
        })
      })
      resolve()
    })
  ])
};
