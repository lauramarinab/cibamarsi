import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/index.css'

import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Cibamarsi from '../UI/Cibamarsi'

const favicon = '../assets/lm-favicon.grigio.png'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=VT323&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Muli:800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <Cibamarsi />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
