import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Timeline from '../components/timeline';
import Skills from '../components/skills';
import SEO from '../components/seo';

import styles from './parcours.module.css';

import resume from '../assets/CV_TomFevrier.pdf';

const ResumePage = ({ data }) => {
    const studies = [
        {
            node: {
                id: '42',
                school: '42',
                location: 'Paris',
                start: '2019',
                end: '2020',
                description: 'Année de césure : perfectionnement en développement informatique',
            },
        },
        {
            node: {
                id: 'edj',
                school: 'École de Journalisme de Sciences Po',
                location: 'Paris',
                start: '2018',
                end: '2021',
                description: 'Master de journalisme',
            },
        },
        {
            node: {
                id: 'auckland',
                school: 'University of Auckland',
                location: 'Nouvelle-Zélande',
                start: '2017',
                end: '2018',
                description: "Troisième année d'études à l'étranger",
            },
        },
        {
            node: {
                id: 'scube',
                school: 'Sciences Po ✕ Université Pierre et Marie Curie',
                location: 'Paris',
                start: '2015',
                end: '2018',
                description: `Double cursus "Sciences et sciences sociales" : double licence en sciences sociales (spécialité en économie) et en informatique`,
            },
        },
        {
            node: {
                id: 'robes',
                school: 'Lycée Robespierre',
                location: 'Arras',
                start: '2012',
                end: '2015',
                description: 'Baccalauréat scientifique obtenu avec mention très bien',
            },
        },
    ];

    return (
        <Layout>
            <SEO title="Parcours" />
            <article>
                <Timeline title="Expériences professionnelles" data={data.allStrapiJob.edges} />
                <Timeline title="Études" data={studies} />
                <Skills title="Compétences" />
                <a href={resume} target="_blank" rel="noopener noreferrer" className={styles.button} download={'CV_TomFévrier.pdf'}>
                    Télécharger le CV en PDF
                </a>
            </article>
        </Layout>
    );
};

export default ResumePage;

export const pageQuery = graphql`
    query JobsQuery {
        allStrapiJob(sort: { fields: [end, start], order: DESC }) {
            edges {
                node {
                    id
                    start
                    end
                    company {
                        name
                        slug
                    }
                    companyString
                    location
                    description
                }
            }
        }
    }
`;
