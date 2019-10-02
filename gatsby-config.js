module.exports = {
	siteMetadata: {
		title: 'Tom Février',
		description: 'Datajournalisme et nouveaux formats',
		author: 'Tom Février',
		menuLinks: [
			{
				name: 'À propos',
				link: '/a-propos/'
			},
			{
				name: 'Projets',
				link: '/projets/'
			},
			{
				name: 'Parcours',
				link: '/parcours/'
			},
			{
				name: 'Contact',
				link: '/contact/'
			}
		]
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/public/static`
			}
		},
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: process.env.DEPLOY_URL
					? 'https://tomfevrier-portfolio.herokuapp.com'
					: 'http://localhost:1337',
				contentTypes: [
					// List of the Content Types you want to be able to request from Gatsby.
					'project',
					'publisher',
					'job',
					'skill'
				],
				queryLimit: 1000
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-offline',
		'gatsby-plugin-transition-link'
	]
};
