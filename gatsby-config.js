module.exports = {
  siteMetadata: {
    title: 'Black Sad List',
    by: 'NjRFNDlCNDg3Q0QyOEU2QjhCOUYzMkVDRTcwRUE4MjgzMjM1OTkyOEJBOERGOTgwODQzQjJFNTZBNUE1QUZBMQ==',
    description: 'Se você está nesta lista repense suas ações'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cairo`,
          `Goldman`
        ],
        display: 'swap'
      }
    }
  ],
}
