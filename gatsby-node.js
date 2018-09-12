// Dynamic content generation for blogs
const path = require('path')
const crypto = require('crypto')
const dir = require('node-dir')
const matter = require('gray-matter')
const unified = require('unified')
const markdown = require('remark-parse')
const highlight = require('remark-highlight.js')
const html = require('remark-html')
const algoliasearch = require('algoliasearch')
const authors = require('./src/pages/blog/generated-authors.json')
const categories = require('./src/pages/blog/generated-categories.json')
const blogsPerPage = 5
const examplesPerPage = 24

var client = algoliasearch('V3VM7IN3TH', '9a3c539ada1e49ee00b670534c9c605f');
var index = client.initIndex('dev_BLOG_SEARCH');

exports.sourceNodes =  async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  return new Promise((resolve, reject) => {
    dir.readFiles('./content/examples/', {
      match: /.md$/,
      recursive: true
      //exclude: /^\./
    }, (err, content, filename, next) => {
      if (err) throw err

      const { data: frontmatter, content: markdownContent } = matter(content)
      const blogId = path.dirname(filename).replace('content/examples/', '')

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
          const examples = {
            id: blogId,
            parent: null,
            children: [],
            internal: {
              type: `Examples`,
              contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(content))
                .digest(`hex`),
            },
            frontmatter,
            content: String(file),
          }
          createNode(examples)
          next()
        });
    });
  
    
    dir.readFiles('./content/blog', {
      match: /.md$/,
      //exclude: /^\./
    }, (err, content, filename, next) => {
      if (err) throw err

      const { data: frontmatter, content: markdownContent } = matter(content)
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
  });
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allBlog {
          edges {
            node {
              id
            }
          }
        }
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id,
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then(result => {
      const examples = result.data.allMarkdownRemark.edges.filter(data => data.node.frontmatter.title !== '');

      for(let i = 0 ; i < examples.length ; i += examplesPerPage ) {
        const page = i / examplesPerPage;
        createPage({
          path: `examples${ page === 0 ? '' : ('/page/' + (page + 1) ) }`,
          component: path.resolve(`./src/templates/examplesList.js`),
          context: {
            limit: examplesPerPage,
            start: i,
          }
        })
      }

      const blogs = result.data.allBlog.edges;

      for(let i = 0 ; i < blogs.length ; i += blogsPerPage ) {
        const page = i / blogsPerPage;
        createPage({
          path: `blog${ page === 0 ? '' : ('/page/' + (page + 1) ) }`,
          component: path.resolve(`./src/templates/blogList.js`),
          context: {
            limit: 5,
            start: i,
          }
        })
      }

      blogs.forEach(({ node }) => {
        createPage({
          path: `blog/${node.id}`,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            blogId: node.id
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
            categoryId: categoryKey
          },
        })
      })
      resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};
