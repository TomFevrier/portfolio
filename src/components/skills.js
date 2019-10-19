import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Donut from './donut';

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
	return (
		<section className={styles.skills}>
			<h2>{title}</h2>
			<div className={styles.container}>
				<ul>
					{data.allStrapiSkill.edges.map(({ node }) => (
						<li key={node.id}>
							<Donut data={node} />
							<p>{node.name}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Skills;

// componentDidMount() {
//     window.addEventListener('scroll', () => {
//         document.querySelectorAll('circle:last-child').forEach(donut => {
//             donut.style.strokeDasharray = '630, 630';
//         });
//     });
// }
