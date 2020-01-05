const path = require(`path`);

const makeRequest = (graphql, request) =>
    new Promise((resolve, reject) => {
        // Query for nodes to use in creating pages.
        resolve(
            graphql(request).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                return result;
            })
        );
    });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const getProjects = makeRequest(
        graphql,
        `
    {
      allStrapiProject {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `
    ).then(result => {
        // Create pages for each article.
        result.data.allStrapiProject.edges.forEach(({ node }) => {
            createPage({
                path: `/projet/${node.slug}`,
                component: path.resolve(`src/templates/project.js`),
                context: {
                    id: node.id,
                },
            });
        });
    });

    const getPublishers = makeRequest(
        graphql,
        `
    {
      allStrapiPublisher {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `
    ).then(result => {
        result.data.allStrapiPublisher.edges.forEach(({ node }) => {
            console.log(node);
            createPage({
                path: `/media/${node.slug}`,
                component: path.resolve(`src/templates/publisher.js`),
                context: {
                    id: node.id,
                },
            });
        });
    });

    return Promise.all([getProjects, getPublishers]);
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /isotope-layout/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
};
