module.exports = {
  siteMetadata: {
    title: 'Black Sad List',
    by: 'MkY2QTM4MEE0Qjg0QjM5OTEwN0I5Qjk0OTY4QzNEQTZGMkIyRDZEQzY3NEZENDAyMDZBOEUyRDJCNkUwMUI4NA==',
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
