import React from 'react';

import { navigate } from 'gatsby-link';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './contact.module.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.placeholders = [
            {
                name: 'Luke Skywalker',
                email: 'theforceisstrongwithme@hotmail.fr',
            },
            {
                name: 'Zaphod Beeblebrox',
                email: 'president@gov.galaxy',
            },
            {
                name: 'Thomas A. Anderson',
                email: 'neo@thematrix.org',
            },
            {
                name: 'Spock',
                email: 'enterprise@starfleet.ufp.org',
            },
            {
                name: 'Tony Stark',
                email: 'therealironman@wanadoo.fr',
            },
            {
                name: 'Tyrion Lannister',
                email: 'hand@redkeep.gov.west',
            },
            {
                name: 'Rick Deckard',
                email: 'bladerunner@lapd.online',
            },
        ];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.setState({
            alea: Math.floor(Math.random() * this.placeholders.length),
        });
    }

    handleChange(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            'form-name': form.getAttribute('name'),
            ...this.state,
        };
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: Object.keys(data)
                .map(
                    key =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            data[key]
                        )}`
                )
                .join('&'),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => alert(error));
    }

    render() {
        return (
            <Layout>
                <SEO title="Contact" />
                <div>
                    <form
                        name="Contact"
                        method="POST"
                        action="/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={this.handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <h2 className={styles.title}>Contactez-moi !</h2>
                        <div>
                            <label htmlFor="name">Nom*</label>
                            <input
                                type="text"
                                name="name"
                                placeholder={
                                    this.placeholders[this.state.alea].name
                                }
                                required
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Adresse e-mail*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder={
                                    this.placeholders[this.state.alea].email
                                }
                                required
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={styles.large}>
                            <label htmlFor="message">Message*</label>
                            <textarea
                                name="message"
                                rows="10"
                                required
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default Contact;
