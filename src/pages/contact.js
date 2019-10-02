import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './contact.module.css';

const Contact = () => {
	const placeholders = [
		{
			name: 'Luke Skywalker',
			email: 'theforceisstrongwithme@hotmail.fr'
		},
		{
			name: 'Zaphod Beeblebrox',
			email: 'president@gov.galaxy'
		},
		{
			name: 'Thomas A. Anderson',
			email: 'neo@thematrix.org'
		},
		{
			name: 'Spock',
			email: 'enterprise@starfleet.ufp.org'
		},
		{
			name: 'Tony Stark',
			email: 'therealironman@wanadoo.fr'
		},
		{
			name: 'Tyrion Lannister',
			email: 'hand@redkeep.gov.west'
		},
		{
			name: 'Rick Deckard',
			email: 'bladerunner@lapd.online'
		}
	];

	const alea = Math.floor(Math.random() * placeholders.length);

	return (
		<Layout>
			<SEO title="Contact" />
			<div>
				<form name="Contact" method="POST" data-netlify="true">
					<h2 className={styles.title}>Contactez-moi !</h2>
					<div>
						<label for="name">Nom*</label>
						<input
							type="text"
							name="name"
							placeholder={placeholders[alea].name}
							required
						/>
					</div>
					<div>
						<label for="email">Adresse mail*</label>
						<input
							type="email"
							name="email"
							placeholder={placeholders[alea].email}
							required
						/>
					</div>
					<div className={styles.large}>
						<label for="message">Message*</label>
						<textarea name="message" rows="10" required />
					</div>
					<button type="submit">Envoyer</button>
				</form>
			</div>
		</Layout>
	);
};

export default Contact;
