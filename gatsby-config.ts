import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `eCommercePaired`,
    siteUrl: `https://davidflr1.github.io/eCommerce/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // {
    //   resolve: 'gatsby-source-shopify',
    //   options: {
    //     "shopName": "",
    //     "accessToken": ""
    //   }
    // }, 
      // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     "projectId": "",
    //     "dataset": "production"
    //   }
    // }, 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/icon.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/`,
      },
      __key: 'images',
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
        },
      },
    },
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sass", 
    // "gatsby-plugin-google-gtag", 
    "gatsby-plugin-sitemap", 
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
  ]
};

export default config;
