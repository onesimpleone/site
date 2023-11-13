import type { GatsbyConfig } from 'gatsby'
const path = require('path')

const siteAddress = 'https://onesimpleone.com'
const config: GatsbyConfig = {
  siteMetadata: {
    title: 'OneSimple',
    siteUrl: siteAddress,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        utils: path.join(__dirname, 'src'),
      },
    },
    // "gatsby-plugin-google-gtag",
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: new URL(siteAddress).href.slice(0, -1),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'OneSimple',
        short_name: 'OneSimple',
        start_url: '/',
        background_color: '#0D0D0D',
        theme_color: '#0D0D0D',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
  ],
}

export default config
