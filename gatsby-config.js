module.exports = {
    siteMetadata: {
        title: 'Tom Février',
        description: 'Datajournalisme et nouveaux formats',
        author: 'Tom Février',
        menuPaths: [
            {
                name: 'Projets',
                path: '/projets/',
            },
            {
                name: 'Parcours',
                path: '/parcours/',
            },
            {
                name: 'Contact',
                path: '/contact/',
            },
        ],
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: 'https://tomfevrier-portfolio.herokuapp.com',
                // apiURL: 'http://localhost:1337',
                contentTypes: [
                    // List of the Content Types you want to be able to request from Gatsby.
                    'project',
                    'publisher',
                    'job',
                    'skill',
                ],
                queryLimit: 1000,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-offline',
        'gatsby-plugin-transition-link',
    ],
    flags: {
        DEV_SSR: false,
    }
};
