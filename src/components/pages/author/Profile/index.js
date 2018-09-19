import React from 'react'
import { Column, ResponsiveStack } from 'serverless-design-system/src'
import { AppContainer } from 'src/components'

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
          githubHandle={author.github}
          twitterHandle={author.twitter}
          mediumHandle={author.medium}
        />
      </Column>
      <Column
        width={[1, 1, 0.6]}
        alignItems="center"
        my={2}
      >
        <Bio
          authorName={author.name}
          bio={author.bio.long || author.bio.short}
        />
      </Column>
    </ResponsiveStack>
  </AppContainer>
)

Profile.defaultProps = { author: {} }
export default Profile
