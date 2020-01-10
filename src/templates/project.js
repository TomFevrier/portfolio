import React from 'react';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown';
import ReactPlayer from 'react-player';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/layout';
import SEO from '../components/seo';
import YouTubeEmbed from '../components/youtube-embed';
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
            <SEO title={data.strapiProject.title} />
            <article>
                {/* Title */}
                <h2>{data.strapiProject.title}</h2>

                {/* Subtitle */}
                <p className={styles.subtitle}>
                    {data.strapiProject.category !== 'other' && <span className={styles.slug}>{categories[data.strapiProject.category]}</span>}
                    <span className={styles.publicationInfo}>
                        <AniLink paintDrip color="rebeccapurple" to={`/media/${data.strapiProject.publisher.slug}`} className={styles.publisher}>
                            <span>{data.strapiProject.publisher.name}</span>
                        </AniLink>
                        {!data.strapiProject.publisher.name.startsWith('Projet ') && (
                            <span className={styles.date}>
                                &nbsp;&mdash;&nbsp;Publié le&nbsp;
                                {new Date(data.strapiProject.date).toLocaleDateString('fr-FR', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </span>
                        )}
                        {data.strapiProject.publisher.name.startsWith('Projet ') && (
                            <span className={styles.date}>
                                &nbsp;&mdash;&nbsp;Réalisé en&nbsp;
                                {new Date(data.strapiProject.date).toLocaleDateString('fr-FR', {
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </span>
                        )}
                    </span>
                </p>

                {/* Authors */}
                {data.strapiProject.authors && <p>Avec {data.strapiProject.authors}</p>}

                {/* Featured media: image, video or YouTube embed */}
                {data.strapiProject.featured_image && !data.strapiProject.video && !(data.strapiProject.link && data.strapiProject.link.includes('youtube')) && (
                    <a href={data.strapiProject.link} target="_blank" rel="noopener noreferrer">
                        <Img fluid={data.strapiProject.featured_image.childImageSharp.fluid} />
                    </a>
                )}
                {data.strapiProject.video && (
                    <a href={data.strapiProject.link} target="_blank" rel="noopener noreferrer">
                        <ReactPlayer url={data.strapiProject.video.internal.description.match(/https:\/\/.+\.mp4/)[0]} width="100%" height="auto" playing loop />
                    </a>
                )}
                {data.strapiProject.link && data.strapiProject.link.includes('youtube') && <YouTubeEmbed src={data.strapiProject.link} />}

                {/* Content */}
                <div className={styles.content}>
                    <ReactMarkdown source={data.strapiProject.content} />
                    {data.strapiProject.link && !data.strapiProject.link.includes('youtube') && (
                        <p className={styles.link}>
                            <a href={data.strapiProject.link} target="_blank" rel="noopener noreferrer">
                                À découvrir ici.
                            </a>
                        </p>
                    )}
                </div>

                {/* Gallery */}
                {data.strapiProject.picture1 && <Gallery pictures={[data.strapiProject.picture1, data.strapiProject.picture2, data.strapiProject.picture3, data.strapiProject.picture4]} />}

                {/* Related projects */}
                {(data.strapiProject.related.length > 0 || data.strapiProject.related_auto.length > 0) && (
                    <div className={styles.related}>
                        <h3>Dans le même genre...</h3>
                        <ul className={styles.relatedGrid}>
                            {data.strapiProject.related.length > 0 &&
                                data.strapiProject.related.map(node => (
                                    <li key={node.id} className={styles.relatedItem}>
                                        <RelatedProject {...node} />
                                    </li>
                                ))}
                            {data.strapiProject.related_auto.length > 0 &&
                                data.strapiProject.related_auto.map(node => (
                                    <li key={node.id} className={styles.relatedItem}>
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
                    fluid(maxWidth: 2048) {
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
            picture1 {
                id
                childImageSharp {
                    fluid(maxWidth: 2048) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            picture2 {
                id
                childImageSharp {
                    fluid(maxWidth: 2048) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            picture3 {
                id
                childImageSharp {
                    fluid(maxWidth: 2048) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            picture4 {
                id
                childImageSharp {
                    fluid(maxWidth: 2048) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;
