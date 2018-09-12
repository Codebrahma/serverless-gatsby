import React from 'react'
import { Column, ResponsiveStack } from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import {
  getGithubLink,
  getTwitterLink,
  getMediumLink,
} from 'src/utils/links'

import Avatar from './Avatar'
import Bio from './Bio'
import Links from './Links'

const Profile = ({ author }) => (
  <AppContainer>
    <ResponsiveStack mt={[2, 2, 5]}>
      <Column
        width={[1, 1, 0.4]}
        alignItems={["center", "center", "flex-end"]}
        my={2}
      >
        <Avatar avatar={author.avatar} />
        <Links
          personalWebsite={author.personalWebsite}
          githubLink={getGithubLink(author.github)}
          twitterLink={getTwitterLink(author.twitter)}
          mediumLink={getMediumLink(author.medium)}
        />
      </Column>
      <Column
        width={[1, 1, 0.6]}
        alignItems="center"
        my={2}
      >
        <Bio
          authorName={author.name}
          bio={author.bio.long}
        />
      </Column>
    </ResponsiveStack>
  </AppContainer>
)

Profile.defaultProps = { author: {} }
export default Profile
