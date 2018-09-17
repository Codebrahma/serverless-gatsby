import React from 'react'
import Link from 'gatsby-link'

export default function BreadcrumbItem({ getUrlFromPathSegments, pathSegments, label }) {
  return (
    <Link to={getUrlFromPathSegments(pathSegments)}>
      {label}
    </Link>
  )
}

