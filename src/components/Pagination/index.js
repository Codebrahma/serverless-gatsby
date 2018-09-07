import React from 'react'
import styled from 'styled-components'
import { push } from 'gatsby-link'
import { Row, Column, Text } from 'serverless-design-system/src'

const pagesToShow = 7;
const PaginationButton = styled(Column)`
  padding: 10px 12px;
  cursor: ${({ disabled }) => ( disabled ? 'auto' : 'pointer' )};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  ${
    ({ selected }) =>
      selected && `
        background-color: rgba(253, 87, 80, 0.2);
        border-style: solid;
        border-width: 1px;
        border-image-source: linear-gradient(to bottom, rgba(255, 144, 136, 0), #fd5750);
        border-image-slice: 1;
      `
  }
`

export default class Pagination extends React.Component {
  pagesCollection = []

  addPagesCollection(pages) {
    if ( pages.length > 0 ) {
      this.pagesCollection.push(pages)
    }
  }

  calcPagesCollection = () => {
    const { current, total } = this.props

    if (total === 0) {
      return []
    }

    this.pagesCollection = []
    const allPages = Array.apply(null, { length: total }).map(Number.call, Number)

    if ( pagesToShow >= total ) {
      this.addPagesCollection(allPages)
    } else {
      const elementsToShow = Math.ceil(pagesToShow / 2)
      const adjuster = Math.ceil(elementsToShow / 2)

      if ( current < elementsToShow ) {
        this.addPagesCollection(allPages.slice(0, elementsToShow + 1))
        this.addPagesCollection(allPages.slice(total - adjuster))
      } else if ( current < total - elementsToShow ) {
        this.addPagesCollection(allPages.slice(0, adjuster))
        this.addPagesCollection(allPages.slice(current - 1, current + (elementsToShow - adjuster)))
        this.addPagesCollection(allPages.slice(total - adjuster))
      } else {
        this.addPagesCollection(allPages.slice(0, adjuster))
        this.addPagesCollection(allPages.slice(total - (elementsToShow + 1)))
      }
    }
  }

  renderButtons = (numbers) => (
    numbers.map((number) => {
      const link = number === 0 ? '/blog' : `/blog/page/${(number + 1)}`

      return (
        <PaginationButton
          key={link}
          onClick={() => push(link)}
          selected={number === this.props.current}
        >
          <Text.span fontSize={1}>
            { number + 1 }
          </Text.span>
        </PaginationButton>
      );
    })
  )

  render() {
    const { total, current } = this.props;
    this.calcPagesCollection();

    return (
      <Row justifyContent="center">
        {
          (current > 2) && (
            <PaginationButton onClick={() => push(`/blog/page/${current - 1}`)}>
              &larr;
            </PaginationButton>
          )
        }

        {
          this.pagesCollection.map((pages, index) => (
            <React.Fragment key={`collection-${index}`}>
              { this.renderButtons(pages) }
              {
                (index !== this.pagesCollection.length - 1) && (
                  <PaginationButton disabled>
                    ..
                  </PaginationButton>
                )
              }
            </React.Fragment>
          ))
        }
        {
          (Math.abs(current - total) > 2) && (
            <PaginationButton onClick={() => push(`/blog/page/${current+1}`)}>
              &rarr;
            </PaginationButton>
          )
        }
      </Row>
    )
  }
}
