require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Default title of the page
    siteTitleAlt: `Demin-Welcome to My Studio`,
    // Used for the title template on pages other than the index site
    siteTitle: `Demin`,      
    // Can be used for e.g. JSONLD
    siteHeadline: `Demin-Studio`,    
    // Used for SEO
    siteDescription: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI. Includes Light/Dark mode.` 
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Demin Yin`,
        location:`Waterloo,ON,Canada`,
        showThemeAuthor:false,
        socialMedia: [
          {
            title: `Facebook`,
            href: `https://www.facebook.com/profile.php?id=100009974165746`
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia - @lekoarts/gatsby-theme-emilia`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
