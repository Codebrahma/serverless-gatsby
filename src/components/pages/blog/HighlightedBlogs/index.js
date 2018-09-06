import React from 'react'
import Carousel from './Carousel'
import Item from './Item'

export default ({ blogs }) => (
  <Carousel>
    { blogs.map((blog, index) => (<Item {...blog} key={`highlighted-${index}`} />)) }
  </Carousel>
)
