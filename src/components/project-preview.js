import React from 'react';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from './project-preview.module.css';

const ProjectPreview = node => {
    const card = (
        <div className={styles.card}>
            {node.featured_image && <Img fluid={node.featured_image.childImageSharp.fluid} className={styles.thumbnail} />}
            <div className={styles.cache}></div>
            <div className={styles.info}>
                <h2>
                    <span>{node.title}</span>
                </h2>
                <p>
                    {node.publisher && (
                        <span>
                            <b>{node.publisher.name}</b> &mdash;{' '}
                        </span>
                    )}
                    {!node.publisher.name.startsWith('Projet') && <span>{new Date(node.date).toLocaleDateString('fr-FR')}</span>}
                    {node.publisher.name.startsWith('Projet') && (
                        <span>
                            {new Date(node.date).toLocaleDateString('fr-FR', {
                                month: 'long',
                                year: 'numeric',
                            })}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );

    if (node.link) {
        return (
            <a href={node.link} target="_blank" rel="noopener noreferrer">
                {card}
            </a>
        );
    }

    return (
        <AniLink paintDrip color="rebeccapurple" to={`/projet/${node.slug}`}>
            {card}
        </AniLink>
    );
}

export default ProjectPreview;
