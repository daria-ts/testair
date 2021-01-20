require('dotenv').config({
  path: `.env`
}

);
const config = require('gatsby-plugin-config');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appIdpbS3NutGPzDp`,
            tableName: `Tools`,
          }
        ]
  
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {

        mode: "async",
    
        /* Enable font loading listener to handle FOUT */
        enableListener: true,
    
        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],
    
        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["TurismoCF-Heavy", "TurismoCF-Medium"],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: "/fonts/css/fonts.css",
          },
        ],
      },
    }
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
