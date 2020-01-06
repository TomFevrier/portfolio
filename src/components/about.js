import React from 'react';
import { graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithubSquare,
    faTwitterSquare,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { useStaticQuery } from 'gatsby';

import styles from './about.module.css';

// import ascii from '../assets/ascii.png';

const About = () => {
    const data = useStaticQuery(graphql`
        query AboutQuery {
            allStrapiJob(sort: { fields: [end, start], order: DESC }) {
                edges {
                    node {
                        id
                        company {
                            name
                            slug
                        }
                        companyString
                    }
                }
            }
        }
    `);
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>{'Datajournaliste, développeur de nouveaux formats.'}</p>
                    <p>
                        {"Étudiant à l'"}
                        <a
                            href="https://www.sciencespo.fr/journalisme/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            École de Journalisme de Sciences Po Paris
                        </a>
                        {", en césure à l'"}
                        <a
                            href="https://www.42.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            École 42
                        </a>{' '}
                        pour l'année 2019-2020.
                    </p>
                    <p>
                        {'Passé par '}
                        {data.allStrapiJob.edges.map(({ node }, index) => (
                            <span key={node.id}>
                                {index > 0 && ', '}
                                {node.company ? (
                                    <AniLink
                                        paintDrip
                                        color="rebeccapurple"
                                        to={`/media/${node.company.slug}`}
                                    >
                                        {node.company.name}
                                    </AniLink>
                                ) : (
                                    node.companyString
                                )}
                            </span>
                        ))}
                        {'.'}
                    </p>
                    <p>
                        Cinéphile, sérievore, passionné de science-fiction et de
                        nouvelles technologies.
                    </p>
                </div>
                <ul className={styles.social}>
                    <li>
                        <a
                            href="https://twitter.com/TomFevrier"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/TomFevrier"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithubSquare} size="lg" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/tomfevrier/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;

// <div className={styles.picture}>
// 	<img src={ascii} width="100%" />
// </div>
