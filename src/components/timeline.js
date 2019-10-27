import React from 'react';

import { Link } from 'gatsby';

import ScrollAnimation from 'react-animate-on-scroll';

import 'animate.css/animate.min.css';
import styles from './timeline.module.css';

const Timeline = ({ title, data }) => {
    const dateFormat = data[0].node.start.length === 4 ? 'year' : 'full';
    const dateOptions = {
        month: 'long',
        year: 'numeric',
    };
    return (
        <section className={styles.timeline}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.container}>
                <ul>
                    {data.map(({ node }) => (
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            duration={0.5}
                            animateOnce={true}
                            className={styles.item}
                        >
                            <li key={node.id}>
                                <div className={styles.content}>
                                    <p>
                                        {dateFormat === 'year' && (
                                            <span className={styles.dates}>
                                                {new Date(
                                                    node.start
                                                ).getFullYear()}{' '}
                                                &ndash;{' '}
                                                {new Date(
                                                    node.end
                                                ).getFullYear()}
                                            </span>
                                        )}
                                        {dateFormat === 'full' &&
                                            new Date(node.start).getMonth() ===
                                                new Date(
                                                    node.end
                                                ).getMonth() && (
                                                <span className={styles.dates}>
                                                    {new Date(
                                                        node.start
                                                    ).toLocaleDateString(
                                                        'fr-FR',
                                                        dateOptions
                                                    )}
                                                </span>
                                            )}
                                        {dateFormat === 'full' &&
                                            new Date(node.start).getMonth() !==
                                                new Date(
                                                    node.end
                                                ).getMonth() && (
                                                <span className={styles.dates}>
                                                    {new Date(
                                                        node.start
                                                    ).getYear() ==
                                                    new Date(node.end).getYear()
                                                        ? new Date(
                                                              node.start
                                                          ).toLocaleDateString(
                                                              'fr-FR',
                                                              {
                                                                  month: 'long',
                                                              }
                                                          )
                                                        : new Date(
                                                              node.start
                                                          ).toLocaleDateString(
                                                              'fr-FR',
                                                              dateOptions
                                                          )}{' '}
                                                    &ndash;{' '}
                                                    {new Date(
                                                        node.end
                                                    ).toLocaleDateString(
                                                        'fr-FR',
                                                        dateOptions
                                                    )}
                                                </span>
                                            )}
                                    </p>
                                    {node.company ? (
                                        <h3>
                                            <span className={styles.entity}>
                                                <Link
                                                    to={`/media/${node.company.slug}`}
                                                >
                                                    {node.company.name}
                                                </Link>
                                            </span>
                                            , {node.location}
                                        </h3>
                                    ) : (
                                        node.companyString && (
                                            <h3>
                                                <span className={styles.entity}>
                                                    {node.companyString}
                                                </span>
                                                , {node.location}
                                            </h3>
                                        )
                                    )}
                                    {node.school && (
                                        <h3>
                                            <span className={styles.entity}>
                                                {node.school}
                                            </span>
                                            , {node.location}
                                        </h3>
                                    )}
                                    <p>{node.description}</p>
                                </div>
                            </li>
                        </ScrollAnimation>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Timeline;
