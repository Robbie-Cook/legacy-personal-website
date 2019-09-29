module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `photos`,
        path: `${__dirname}/src/photos/`
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-nprogress`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Robbie Cook`,
        short_name: `Robbie Cook`,
        icon: `src/photos/icon.png`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
