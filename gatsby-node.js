const _ = require("lodash");
const path = require("path");
const axios = require("axios");
const crypto = require("crypto");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const fetchFormSubmissions = () =>
    axios.get(
      `https://api.netlify.com/api/v1/forms/5c4703206451bf0008ce517d/submissions`,
      {
        headers: { Authorization: `Bearer ${process.env.NETLIFY_API_TOKEN}` }
      }
    );

  const res = await fetchFormSubmissions();

  res.data.map((submission, i) => {
    // Create your node object
    const submissionNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Submission` // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      name: submission.name,
      body: submission.body
    };

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(submissionNode))
      .digest(`hex`);

    submissionNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(submissionNode);
  });

  return;
};
