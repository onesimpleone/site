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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'OneSimple',
        short_name: 'OneSimple',
        start_url: '/',
        background_color: '#0D0D0D',
        theme_color: '#0D0D0D',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
}

export default config
