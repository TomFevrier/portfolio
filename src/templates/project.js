import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactPlayer from 'react-player';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RelatedProject from '../components/related-project';
import Gallery from '../components/gallery';

import styles from './project.module.css';

const ProjectTemplate = ({ data }) => (
	<Layout>
		<SEO title={data.strapiProject.title} />
		<article>
			<div className={styles.main}>
				<h1>{data.strapiProject.title}</h1>
				<p>
					<Link
						to={`/media/${data.strapiProject.publisher.slug}`}
						className={styles.publisher}
					>
						<span>{data.strapiProject.publisher.name}</span>
					</Link>
					<span className={styles.date}>
						&nbsp;&mdash;&nbsp;Publié le&nbsp;
						{new Date(data.strapiProject.date).toLocaleDateString('fr-FR', {
							day: 'numeric',
							month: 'long',
							year: 'numeric'
						})}
					</span>
				</p>
				{data.strapiProject.authors && <p>Avec {data.strapiProject.authors}</p>}
				<a
					href={data.strapiProject.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					Lien
				</a>
				{(data.strapiProject.related || data.strapiProject.related_auto) && (
					<>
						<h3>Dans le même genre...</h3>
						<ul className={styles.grid}>
							{data.strapiProject.related &&
								data.strapiProject.related.map(node => (
									<li key={node.id} className={styles.item}>
										<RelatedProject {...node} />
									</li>
								))}
							{data.strapiProject.related_auto &&
								data.strapiProject.related_auto.map(node => (
									<li key={node.id} className={styles.item}>
										<RelatedProject {...node} />
									</li>
								))}
						</ul>
					</>
				)}
			</div>
			<aside>
				{data.strapiProject.video && (
					<a
						href={data.strapiProject.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ReactPlayer
							url={data.strapiProject.video.publicURL}
							width="100%"
							height="auto"
							playing
							loop
						/>
					</a>
				)}
				{data.strapiProject.pictures && <Gallery {...data} />}
			</aside>
		</article>
	</Layout>
);

export default ProjectTemplate;

export const query = graphql`
	query ProjectTemplate($id: String!) {
		strapiProject(id: { eq: $id }) {
			title
			publisher {
				name
				slug
			}
			date
			authors
			link
			related {
				id
			}
			related_auto {
				id
			}
			featured_image {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			video {
				publicURL
			}
		}
	}
`;

// pictures {
// 	id
// 	localFile {
// 		childImageSharp {
// 			fluid(maxWidth: 1500) {
// 				...GatsbyImageSharpFluid
// 			}
// 		}
// 	}
// }
