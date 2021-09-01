/**
 * TODO: заменить на onesimpleone.com
 */
const siteAddress = new URL("https://d2wyxqay8p9ua6.cloudfront.net");

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
     * Плагин, чтобы прямая ссылка на корзину 
     * не влияла на seo, если вдруг эта 
     * ссылка попадёт в выдачу.
     */
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      }
    }
  ],
};
