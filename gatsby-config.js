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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap",
            "Fira+Code:wght@300;400;500;600;700&display=swap",
          ],
        },
        classes: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    "gatsby-plugin-sharp",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "Lakewood Courier Website",
    //     short_name: "Lakewood Courier",
    //     start_url: "/",
    //     background_color: "white",
    //     theme_color: "rgb(59, 86, 166)",
    //     display: "standalone",
    //     icon: "src/images/favicon.png",
    //     cache_busting_mode: "none",
    //   },
    // },
    "gatsby-plugin-offline",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
  ],
};
