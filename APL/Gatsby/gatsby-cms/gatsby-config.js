/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: `GraphCMS`, 
        fieldName: `gcms`, 
        url: `https://api-eu-central-1.graphcms.com/v2/cko2js3crsy2l01z0ek2l3e9d/master`
      }
    }
  ],
}
