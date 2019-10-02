import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectPreview from '../components/project-preview';

import styles from '../pages/index.module.css';

const PublisherTemplate = ({ data }) => (
	<Layout>
		<SEO
			title={
				data.strapiPublisher.name === 'Projet personnel'
					? 'Projets personnels'
					: data.strapiPublisher.name
			}
		/>
		<h1>
			{data.strapiPublisher.name === 'Projet personnel'
				? 'Projets personnels'
				: data.strapiPublisher.name}
		</h1>
		{console.log(data.strapiPublisher)}
		<ul className={styles.grid}>
			{data.strapiPublisher.projects.map(node => (
				<li key={node.id} className={styles.item}>
					<ProjectPreview {...node} />
				</li>
			))}
		</ul>
	</Layout>
);

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
