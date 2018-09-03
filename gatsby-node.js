// Dynamic content generation for blogs
const path = require('path')
const crypto = require('crypto')
const dir = require('node-dir')
const matter = require('gray-matter')
const unified = require('unified')
const markdown = require('remark-parse')
const html = require('remark-html')
const blogsPerPage = 5

exports.sourceNodes =  async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  return new Promise((resolve, reject) => {
    dir.readFiles('./content/blog', {
      match: /.md$/,
      //exclude: /^\./
    }, (err, content, filename, next) => {
      if (err) throw err

      const { data: frontmatter, content: markdownContent } = matter(content)
      const blogId = path.basename(filename, path.extname(filename))

      unified()
        .use(markdown)
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
      }
    `).then(result => {
      const blogs = result.data.allBlog.edges;

      for(let i = 0 ; i < blogs.length ; i += blogsPerPage ) {
        const page = i / blogsPerPage;
        createPage({
          path: `blog${ page === 0 ? '' : ('/page/' + page) }`,
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
      resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};
