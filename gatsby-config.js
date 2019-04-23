module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `robbie.pw`,
        short_name: `robbie.pw`,
        start_url: `/`,
        icon: `src/photos/icon.png`
      },
    },
  ],
}
