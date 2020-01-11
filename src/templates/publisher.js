import React from 'react';
import { graphql } from 'gatsby';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectPreview from '../components/project-preview';

import styles from '../pages/index.module.css';

const PublisherTemplate = ({ data }) => {
    let title;
    switch (data.strapiPublisher.name) {
        case 'Projet personnel':
            title = 'Projets personnels';
            break;
        case 'Projet académique':
            title = 'Projets académiques';
            break;
        default:
            title = data.strapiPublisher.name;
    }
    data.strapiPublisher.projects = data.strapiPublisher.projects.sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
        <Layout>
            <SEO title={title} />
            <h1>{title}</h1>
            <ul className={styles.grid}>
                {data.strapiPublisher.projects.map(node => {
                    node.publisher = { name: data.strapiPublisher.name };
                    return (
                        <AniLink key={node.id} paintDrip color="rebeccapurple" to={`/projet/${node.slug}`}>
                            <li className={styles.item}>
                                <ProjectPreview {...node} />
                            </li>
                        </AniLink>
                    );
                })}
            </ul>
        </Layout>
    );
};

export default PublisherTemplate;

export const query = graphql`
    query PublisherTemplate($id: String) {
        strapiPublisher(id: { eq: $id }) {
            id
            name
            projects {
                id
                slug
                title
                date
                link
                featured_image {
                    childImageSharp {
                        fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
