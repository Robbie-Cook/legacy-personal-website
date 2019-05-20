module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-plugin-nprogress`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Robbie Cook`,
        short_name: `Robbie Cook`,
        icon: `src/photos/icon.png`
      },
    },
  ],
}
