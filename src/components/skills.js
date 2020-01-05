import React, { useState, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Donut from './donut';

import styles from './skills.module.css';

const Skills = ({ title }) => {
    const [animate, setAnimate] = useState(false);
    const skillContainerRef = useRef(null);
    const data = useStaticQuery(graphql`
        query SkillsQuery {
            allStrapiSkill(sort: { fields: [category], order: ASC }) {
                edges {
                    node {
                        id
                        name
                        category
                        level
                    }
                }
            }
        }
    `);

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (
                skillContainerRef.current &&
                skillContainerRef.current.getBoundingClientRect().top <
                    0.8 * window.innerHeight
            )
                setAnimate(true);
        });
    }

    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.container} ref={skillContainerRef}>
                <ul>
                    {data.allStrapiSkill.edges.map(({ node }) => (
                        <li key={node.id}>
                            <Donut data={node} animate={animate} />
                            <p>{node.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

// <Waypoint onEnter={() => setAnimate(true)} debug={true}>

export default Skills;
