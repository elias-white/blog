module.exports = {
  siteMetadata: {
    title: "Elias White",
  },
  plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: `blog`,
              path: `${__dirname}/blog`,
          }
      },
  ],
};
