module.exports = {
  siteMetadata: {
    title: "Gatsby + Node.js (TypeScript) API",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Noto Sans TC", "Roboto", "Arial", "sans-serif"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby + Node.js (TypeScript) API",
        short_name: "Gatsby + Node.js (TypeScript)",
        start_url: "/",
        icon: "src/images/gatsby-icon.png",
      },
    },
  ],
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
