import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithubSquare,
	faTwitterSquare,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import { Link, useStaticQuery } from 'gatsby';

import styles from './about.module.css';

import ascii from '../assets/ascii.png';

const About = () => {
	const data = useStaticQuery(graphql`
		query AboutQuery {
			allStrapiJob(sort: { fields: [end, start], order: ASC }) {
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
			<div className={styles.picture}>
				<img src={ascii} width="100%" />
			</div>
			<div className={styles.content}>
				<div className={styles.text}>
					<p>{'Datajournaliste, développeur de nouveaux formats.'}</p>
					<p>
						{
							"Étudiant à l'École de Journalisme de Sciences Po Paris, en césure à l'École 42 pour l'année 2019-2020."
						}
					</p>
					<p>
						{'Passé par '}
						{data.allStrapiJob.edges.map(({ node }, index) => (
							<span key={node.id}>
								{index > 0 && ', '}
								{node.company ? (
									<Link to={`/media/${node.company.slug}`}>
										{node.company.name}
									</Link>
								) : (
									node.companyString
								)}
							</span>
						))}
						{'.'}
					</p>
					<p>Cinéphile, sérievore.</p>
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
