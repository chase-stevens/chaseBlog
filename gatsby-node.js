const path = require('path');

exports.createPages = (({graphql, actions}) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const postTemplate = path.resolve('src/templates/post.jsx');
        const tagPage = path.resolve('src/pages/tags.jsx');
        const tagPosts = path.resolve('src/templates/tag.jsx');

        resolve(
            graphql(`
                query {
                    allMarkdownRemark {
                        edges {
                            node {
                                frontmatter {
                                    path
                                    title
                                    tags
                                    date
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                if(result.errors) {
                    return Promise.reject(result.errors)
                }

                const posts = result.data.allMarkdownRemark.edges;

                // Create tags page
                const postsByTag = {};

                posts.forEach(({ node }) => {
                    if (node.frontmatter.tags) {
                        node.frontmatter.tags.forEach(tag => {
                            if(!postsByTag[tag]) {
                                postsByTag[tag] = [];
                            }
                            postsByTag[tag].push(node);
                        });
                    }
                });

                const tags = Object.keys(postsByTag);

                createPage({
                    path: '/tags',
                    component: tagPage,
                    context: {
                        tags: tags.sort(),
                    },
                });

                // Create tags
                tags.forEach(tagName => {
                    const posts = postsByTag[tagName];

                    createPage({
                        path: `/tags/${tagName}`,
                        component: tagPosts,
                        context: {
                            posts,
                            tagName,
                        },
                    });
                });

                // Create posts
                posts.forEach(({node}) => {
                    const path = node.frontmatter.path;
                    createPage({
                        path,
                        component: postTemplate,
                        context: {
                            pathSlug: path,
                        },
                    })
                })
            })
        )
    })
})