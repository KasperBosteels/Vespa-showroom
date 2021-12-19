module.exports = {
  siteMetadata: {
    title: `Vespa Showroom Kasper Bosteels`,
    description: `De Vespa showroom van Kasper Bosteels`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: "http://vespa-showroom-kasper-bosteels.local/graphql",
      },
    },
  ],
}
