import React from 'react';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown';
import ReactPlayer from 'react-player';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RelatedProject from '../components/related-project';
import Gallery from '../components/gallery';

import styles from './project.module.css';

const ProjectTemplate = ({ data }) => {
    const categories = {
        text: 'Article',
        video: 'Vidéo',
        data: 'Data',
        interactive: 'Format interactif',
        story: 'Format narratif',
    };

    return (
        <Layout>
            {console.log(data)}
            <SEO title={data.strapiProject.title} />
            <article>
                <h1>{data.strapiProject.title}</h1>
                <p className={styles.subtitle}>
                    {data.strapiProject.category !== 'other' && (
                        <span className={styles.slug}>
                            {categories[data.strapiProject.category]}
                        </span>
                    )}
                    <span className={styles.publicationInfo}>
                        <AniLink
                            paintDrip
                            color="rebeccapurple"
                            to={`/media/${data.strapiProject.publisher.slug}`}
                            className={styles.publisher}
                        >
                            <span>{data.strapiProject.publisher.name}</span>
                        </AniLink>
                        {!data.strapiProject.publisher.name.startsWith(
                            'Projet '
                        ) && (
                            <span className={styles.date}>
                                &nbsp;&mdash;&nbsp;Publié le&nbsp;
                                {new Date(
                                    data.strapiProject.date
                                ).toLocaleDateString('fr-FR', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </span>
                        )}
                        {data.strapiProject.publisher.name.startsWith(
                            'Projet '
                        ) && (
                            <span className={styles.date}>
                                &nbsp;&mdash;&nbsp;Réalisé en&nbsp;
                                {new Date(
                                    data.strapiProject.date
                                ).toLocaleDateString('fr-FR', {
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </span>
                        )}
                    </span>
                </p>
                {data.strapiProject.authors && (
                    <p>Avec {data.strapiProject.authors}</p>
                )}
                {data.strapiProject.video && (
                    <a
                        href={data.strapiProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ReactPlayer
                            url={
                                data.strapiProject.video.internal.description.match(
                                    /https:\/\/.+\.mp4/
                                )[0]
                            }
                            width="100%"
                            height="auto"
                            playing
                            loop
                        />
                    </a>
                )}
                {data.strapiProject.featured_image &&
                    !data.strapiProject.video && (
                        <a
                            href={data.strapiProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Img
                                fluid={
                                    data.strapiProject.featured_image
                                        .childImageSharp.fluid
                                }
                            />
                        </a>
                    )}
                {data.strapiProject.pictures && <Gallery {...data} />}
                <div className={styles.content}>
                    <ReactMarkdown source={data.strapiProject.content} />
                    {data.strapiProject.link && (
                        <p className={styles.link}>
                            <a
                                href={data.strapiProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                À découvrir ici.
                            </a>
                        </p>
                    )}
                </div>
                {(data.strapiProject.related.length > 0 ||
                    data.strapiProject.related_auto.length > 0) && (
                    <div className={styles.related}>
                        <h3>Dans le même genre...</h3>
                        <ul className={styles.relatedGrid}>
                            {data.strapiProject.related.length > 0 &&
                                data.strapiProject.related.map(node => (
                                    <li
                                        key={node.id}
                                        className={styles.relatedItem}
                                    >
                                        <RelatedProject {...node} />
                                    </li>
                                ))}
                            {data.strapiProject.related_auto.length > 0 &&
                                data.strapiProject.related_auto.map(node => (
                                    <li key={node.id} className={styles.item}>
                                        <RelatedProject {...node} />
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
            </article>
        </Layout>
    );
};

export default ProjectTemplate;

export const query = graphql`
    query ProjectTemplate($id: String!) {
        strapiProject(id: { eq: $id }) {
            title
            publisher {
                name
                slug
            }
            date
            authors
            link
            category
            related {
                id
            }
            related_auto {
                id
            }
            featured_image {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            video {
                id
                internal {
                    description
                }
            }
            content
        }
    }
`;

// pictures {
// 	id
// 	localFile {
// 		childImageSharp {
// 			fluid(maxWidth: 1500) {
// 				...GatsbyImageSharpFluid
// 			}
// 		}
// 	}
// }
