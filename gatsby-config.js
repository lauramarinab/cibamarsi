'use strict'

module.exports = {
  pathPrefix: '/cibamarsi',
  siteMetadata: {
    title: 'cibamarsi',
    description: 'cibarsi-amarsi',
    keywords: ['cibamarsi', 'ricetta', 'ricetta', 'imparare', 'cucinare'],
    siteUrl: 'https://lauramarinab.github.io/cibamarsi',
    author: {
      name: 'Laura Marina Bianchi',
      url: 'http://www.lauramarinabianchi.com/',
      email: 'lauramarinabianchi@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://lauramarinab.github.io/cibamarsi'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ]
}
