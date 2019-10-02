import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectPreview from '../components/project-preview';

import styles from '../pages/index.module.css';

const PublisherTemplate = ({ data }) => {
	var title;
	switch (data.strapiPublisher.name) {
		case 'Projet personnel':
			title = 'Projets personnels';
			break;
		case 'Projet académique':
			title = 'Projets académiques';
			break;
		default:
			title = data.strapiPublisher.name;
	}
	return (
		<Layout>
			<SEO title={title} />
			<h1>{title}</h1>
			<ul className={styles.grid}>
				{data.strapiPublisher.projects.map(node => (
					<li key={node.id} className={styles.item}>
						<ProjectPreview {...node} />
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default PublisherTemplate;

export const query = graphql`
	query PublisherTemplate($id: String) {
		strapiPublisher(id: { eq: $id }) {
			id
			name
			projects {
				id
				slug
				title
				date
				link
				featured_image {
					childImageSharp {
						fluid(maxWidth: 600) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
