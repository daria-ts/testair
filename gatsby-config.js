require("dotenv").config({
  path: `.env`,
})
const config = require("gatsby-plugin-config")

module.exports = {
  siteMetadata: {
    title: `Дизайн с кодом и без`,
    description: `Figma, Airtable, Gatsby, Netlify, React – зачем дизайнеру кодить?`,
    author: `@darrrinagym`,
    siteLanguage: "ru",
    socialMedia: [
      {
        name: "Twitter",
        url: "https://twitter.com/darrrinagym",
      },
      {
        name: "Medium",
        url: "https://medium.com/@darrrinagym",
      },
      {
        name: "GitHub",
        url: "https://github.com/darrrinagym",
      },
      {
        name: "Instagram",
        url: "https://instagram.com/darrrinagym",
      },
    ],
    navLinks: {
      menu: [
        {
          name: "Сервисы",
          url: "/apps",
        },
        {
          name: "Статьи",
          url: "/articles",
        },
        {
          name: "CodeKitchen",
          url: "/code-kitchen",
        },
      ],
    },
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
        name: `themes`,
        path: `${__dirname}/src/themes`,
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
        name: `components`,
        path: `${__dirname}/src/components`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extension: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
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
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FE1818`,
        theme_color: `#FE1818`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
            file: "/static/fonts.css",
          },
        ],
        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["Ubuntu", "Ubuntu Mono"],
            /* URL to the font CSS file with @font-face definition */
            file:
              "https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&family=Ubuntu:ital,wght@0,400;0,700;1,400&display=swap",
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
