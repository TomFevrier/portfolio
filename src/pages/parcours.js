import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Timeline from "../components/timeline";
import Skills from "../components/skills";
import SEO from "../components/seo";

import styles from "./parcours.module.css";

const ResumePage = ({ data }) => {
    const studies = [
        {
            node: {
                school: "42",
                location: "Paris",
                start: "2019",
                end: "2020",
                description:
                    "Année de césure : perfectionnement en développement informatique",
            },
        },
        {
            node: {
                school: "École de Journalisme de Sciences Po",
                location: "Paris",
                start: "2018",
                end: "2021",
                description: "Master de journalisme",
            },
        },
        {
            node: {
                school: "University of Auckland",
                location: "Nouvelle-Zélande",
                start: "2017",
                end: "2018",
                description: "Troisième année d'études à l'étranger",
            },
        },
        {
            node: {
                school: "Sciences Po ✕ Université Pierre et Marie Curie",
                location: "Paris",
                start: "2015",
                end: "2018",
                description: `Double cursus "Sciences et sciences sociales" : double licence en sciences sociales (spécialité en économie) et en informatique`,
            },
        },
        {
            node: {
                school: "Lycée Robespierre",
                location: "Arras",
                start: "2012",
                end: "2015",
                description:
                    "Baccalauréat scientifique obtenu avec mention très bien",
            },
        },
    ];

    return (
        <Layout>
            <SEO title="Parcours" />
            <article>
                <Timeline
                    title="Expériences professionnelles"
                    data={data.allStrapiJob.edges}
                />
                <Timeline title="Études" data={studies} />
                <Skills title="Compétences" />
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
