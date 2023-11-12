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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
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
  ],
}

export default config
