import React, { useState, useRef } from 'react';

import ReactMarkdown from 'react-markdown';

import Donut from './donut';

import styles from './skill-category.module.css';

const Skills = ({ category, data }) => {
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (ref.current && ref.current.getBoundingClientRect().top < 0.8 * window.innerHeight) setAnimate(true);
        });
    }

    return (
        <div className={styles.skillCategory} ref={ref}>
            <h3>{category.value}</h3>
            <ul>
                {data.map(({ node }) => (
                    <li key={node.id}>
                        <Donut data={node} animate={animate} />
                        <ReactMarkdown source={node.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
