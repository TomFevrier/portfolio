import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import About from '../components/about';
import ProjectPreview from '../components/project-preview';
import SEO from '../components/seo';

import styles from './index.module.css';

const IndexPage = ({ data }) => (
    <Layout homepage={true}>
        <SEO title="Accueil" />
        <About />
        <br />
        <h2>Derniers projets</h2>
        <ul className={styles.grid}>
            {console.log(data.allStrapiProject.edges)}
            {data.allStrapiProject.edges.map(({ node }) => (
                <li key={node.id} className={styles.item}>
                    <ProjectPreview {...node} />
                </li>
            ))}
        </ul>
    </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allStrapiProject(sort: { fields: [date], order: DESC }, limit: 12) {
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
`;
