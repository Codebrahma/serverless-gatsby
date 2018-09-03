// Dynamic content generation for blogs

const path = require('path')
const crypto = require('crypto')
const dir = require('node-dir')
const matter = require('gray-matter')
var unified = require('unified')
var markdown = require('remark-parse')
var html = require('remark-html')

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
          console.log(frontmatter);
          createNode(blog)
          next();
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
    `
  ).then(result => {
    result.data.allBlog.edges.forEach(({ node }) => {
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
