module.exports = {
  siteMetadata: {
    title: 'Eliabe Junior',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`quicksand\:300,400,900`, `mulli\: 300,400,700`, `slabo 27px\: 400`],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Eliabe Jr',
        short_name: 'eliabejr',
        description: 'A static portfolio made with Gatsby',
        start_url: 'http://eliabejr.com',
        background_color: '#fff',
        theme_color: '#3498db',
        display: 'minimal-ui',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#3498db`,
        showSpinner: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
}
