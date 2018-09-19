import React from 'react'
import { List, ListItem } from 'serverless-design-system/src'

import SubMenuItem from './SubMenuItem'
import { resources } from 'src/constants/urls'

const Resource = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: resources.overview,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        overview
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: resources.blog,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        blog
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: resources.forum,
          crossDomain: true,
          backgroundOnHover: true,
        }}
      >
        forum
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: resources.meetups,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        meetups
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: resources.slack,
          crossDomain: true,
          backgroundOnHover: true,
        }}
      >
        slack
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: resources.workshops,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        workshops
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Resource