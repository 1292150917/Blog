/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2019-11-06 10:15:27
 * @LastEditors: 
 * @LastEditTime: 2019-11-06 10:42:04
 */
module.exports = {
  siteMetadata: {
    title: "An old dog learns code",
    description: 'a simple personal blog',
    author: 'mis zhang',
    sloganHome: 'An Old dog learning new tricks',
    sloganBlog:
      '"The ultimate test of your knowledge is your capacity to convey it to another."',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // gfm: true,
        // commonmark: true,
        // footnotes: true,
        // pedantic: false,
        // // blocks: ["h2"], Blocks option value can be provided here as an array.
        // excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>',
              noInlineHighlight: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener',
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-katex`,
        ],
      },
    },
    'gatsby-plugin-catch-links',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Alex's Midway",
        short_name: 'Midway',
        start_url: '/',
        background_color: '#242121',
        theme_color: '#242121',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-131355293-1',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: '#d45c54',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
