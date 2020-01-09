import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import ProjectPreview from './project-preview';

const RelatedProject = ({ id }) => (
    <StaticQuery
        query={graphql`
            query Projects {
                allStrapiProject {
                    edges {
                        node {
                            id
                            slug
                            title
                            date
                            featured_image {
                                childImageSharp {
                                    fluid(maxWidth: 600) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            publisher {
                                name
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const node = data.allStrapiProject.edges.find(({ node }) => node.id === `Project_${id}`).node;
            return <ProjectPreview {...node} />;
        }}
    />
);

export default RelatedProject;
