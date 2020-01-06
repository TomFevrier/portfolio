import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SkillCategory from './skill-category';

import styles from './skills.module.css';

const Skills = ({ title }) => {
    const data = useStaticQuery(graphql`
        query SkillsQuery {
            allStrapiSkill {
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

    const categories = [
        { id: 'web', value: 'Web' },
        { id: 'programming', value: 'Programmation' },
        { id: 'graphics', value: 'Graphisme' },
        { id: 'video', value: 'Vidéo' },
        { id: 'language', value: 'Langues étrangères' },
    ];

    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>Compétences</h2>
            <div className={styles.container}>
                {categories.map(category => (
                    <SkillCategory
                        key={category.id}
                        category={category}
                        data={data.allStrapiSkill.edges.filter(
                            ({ node }) => node.category === category.id
                        )}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
