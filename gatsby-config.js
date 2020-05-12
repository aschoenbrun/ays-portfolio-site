const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: "AYS Portfolio",
    siteURL: "https://aysportfolio.com",
  },
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     createProxyMiddleware({
  //       target: "http://localhost:9000",
  //       secure: false,
  //       pathRewrite: {
  //         "/.netlify/functions/": "",
  //       },
  //     })
  //   )
  // },
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
            "Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i&display=swap",
            "Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap",
          ],
        },
        classes: false,
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
