// Connecting the variables from the .env file.
require("dotenv").config({
  path: `.env`,
})

const siteAddress = new URL(process.env.SITE_ADDRESS)
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "OneSimple Site",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    /**
     * Добавляет тег canonical в head.
     * Это позволит исключить любые тестовые 
     * разворачивания сайта из индексации в поисковиках.
     */
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      }
    }
  ],
};
