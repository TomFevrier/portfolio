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
                //apiURL: 'http://localhost:1337',
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                //icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-transition-link',
    ],
};
