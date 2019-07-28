import * as React from 'react'
import { Dida, LinkStyled } from '../UI/Typography'
import { sortBy } from 'lodash'
import PostIt from './PostIt/PostIt'
import { colors } from '../styles/variables'

interface Props {
  categories: Array<{ fieldValue: string }>
  width?: string
  height?: string
  style?: React.CSSProperties
}

const CategoriesMenu: React.FC<Props> = ({ categories, style, height, width }) => {
  const categoryList = [
    { name: 'antipasti', position: 1 },
    { name: 'primi', position: 2 },
    { name: 'secondi', position: 3 },
    { name: 'dolci', position: 4 },
    { name: 'piatti unici', position: 5 },
    { name: 'frullati', position: 6 }
  ]

  const orderedCategory = sortBy(
    categories.map(c => {
      return categoryList.find(oC => {
        if (oC.name === c.fieldValue) {
          return {
            position: oC.position,
            category: c.fieldValue
          }
        }
      })!
    }),
    'position'
  )

  // come inserire fontello
  // <span style={{ fontFamily: '"Icons"' }} className="icon-comments">
  //   
  // </span>

  return (
    <PostIt
      style={{ gridColumnStart: 12, gridColumnEnd: 14, gridRowStart: 2, gridRowEnd: 4, ...style }}
      width={width ? width : '200px'}
      height={height ? height : '180px'}
      background="salmone"
      content={
        <>
          {orderedCategory.map(c => {
            return (
              <LinkStyled
                key={c.name}
                to={`/category/${
                  c.name === 'undefined'
                    ? 'uncategorized'
                    : c.name
                        .toLowerCase()
                        .trim()
                        .replace(' ', '-')
                }/`}
              >
                <Dida style={{ marginTop: 5, fontSize: 23, whiteSpace: 'nowrap', color: colors.bianco }}>
                  {c.name === 'undefined' ? 'Uncategorized' : c.name}
                </Dida>
              </LinkStyled>
            )
          })}
        </>
      }
    />
  )
}

export default CategoriesMenu
