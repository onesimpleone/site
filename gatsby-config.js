const siteAddress = new URL("https://dr8n3d7xc3lsl.cloudfront.net");

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
     * Плагин для публикации сайта
     * в aws s3.
     */
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'onesimpleone-site',
          protocol: siteAddress.protocol.slice(0, -1),
          hostname: siteAddress.hostname,
      },
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
