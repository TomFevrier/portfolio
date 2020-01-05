import React from 'react';
import { graphql } from 'gatsby';
import classNames from 'classnames';
import Isotope from 'isotope-layout/js/isotope';

import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';
import SEO from '../components/seo';

import styles from './projets.module.css';

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({ filter: e.target.id });
        if (e.target.id === 'all') this.iso.arrange({ filter: '*' });
        else this.iso.arrange({ filter: `.${e.target.id}` });
    }

    componentDidMount() {
        this.iso = new Isotope(`.${styles.grid}`, {
            itemSelector: `.${styles.item}`,
            layoutMode: 'fitRows',
            percentPosition: true,
        });
        this.iso.arrange({ filter: '*' });
    }

    render() {
        return (
            <Layout>
                <SEO title="Projets" />
                <h2>Tous les projets</h2>
                <ul className={styles.filterMenu}>
                    <li>
                        <button
                            id="all"
                            className={
                                this.state.filter === 'all'
                                    ? styles.highlighted
                                    : ''
                            }
                            onClick={this.handleClick}
                        >
                            Tous
                        </button>
                    </li>
                    <li>
                        <button
                            id="text"
                            className={
                                this.state.filter === 'text'
                                    ? styles.highlighted
                                    : ''
                            }
                            onClick={this.handleClick}
                        >
                            Articles
                        </button>
                    </li>
                    <li>
                        <button
                            id="data"
                            className={
                                this.state.filter === 'data'
                                    ? styles.highlighted
                                    : ''
                            }
                            onClick={this.handleClick}
                        >
                            Data
                        </button>
                    </li>
                    <li>
                        <button
                            id="video"
                            className={
                                this.state.filter === 'video'
                                    ? styles.highlighted
                                    : ''
                            }
                            onClick={this.handleClick}
                        >
                            Vidéo
                        </button>
                    </li>
                    <li>
                        <button
                            id="other"
                            className={
                                this.state.filter === 'other'
                                    ? styles.highlighted
                                    : ''
                            }
                            onClick={this.handleClick}
                        >
                            Autre
                        </button>
                    </li>
                </ul>

                <ul className={styles.grid}>
                    {this.props.data.allStrapiProject.edges.map(({ node }) => (
                        <li
                            key={node.id}
                            className={classNames(styles.item, node.category)}
                        >
                            <ProjectPreview {...node} />
                        </li>
                    ))}
                    {this.props.data.allStrapiProject.edges.map(({ node }) => (
                        <li
                            key={node.id}
                            className={classNames(styles.item, node.category)}
                        >
                            <ProjectPreview {...node} />
                        </li>
                    ))}
                    {this.props.data.allStrapiProject.edges.map(({ node }) => (
                        <li
                            key={node.id}
                            className={classNames(styles.item, node.category)}
                        >
                            <ProjectPreview {...node} />
                        </li>
                    ))}
                </ul>
            </Layout>
        );
    }
}

export default ProjectsPage;

export const pageQuery = graphql`
    query ProjectsQuery {
        allStrapiProject(sort: { fields: [date], order: DESC }) {
            edges {
                node {
                    id
                    slug
                    title
                    date
                    category
                    featured_image {
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    publisher {
                        name
                    }
                }
            }
        }
    }
`;
