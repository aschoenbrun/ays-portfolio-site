const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: "AYS Portfolio",
    siteURL: "https://aysportfolio.com",
  },
  developMiddleware: (app) => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        secure: false,
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    );
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "gcbyz9xx",
        dataset: "production",

        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.MY_SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
        watchMode: true,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Avi Schoenbrun's Portfolio",
        short_name: "AYS Portfolio",
        start_url: "/",
        background_color: "white",
        theme_color: "rgb(0, 31, 43)",
        display: "standalone",
        icon: "src/images/favicon.png",
        cache_busting_mode: "none",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Defers execution of google analytics script after page load
        defer: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    // "gatsby-plugin-remove-serviceworker",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
  ],
};
