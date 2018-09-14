import React from 'react'
import { Column, P, Image, ResponsiveStack } from 'serverless-design-system/src'
import { TitleWithIcon } from 'src/fragments'
import Parallax from 'src/assets/images/parallax.png'

const Challenge = () => (
  <ResponsiveStack mt={[4, 4, 5, 8]}>
    <Column
      width={[1, 1, 4/9]}
      order={[3, 3, 1]}
      mt={[0, 0, 4]}
    >
      <Image
        src={Parallax}
        alt='parallax'
        width={[1, 1, 1]}
      />
    </Column>
    <Column
      width={[0, 0, 1/9]}
      order={[2, 2, 2]}
    />
    <Column
      width={[1, 1, 4/9]}
      order={[1, 1, 3]}
    >
      <TitleWithIcon>The Challenge</TitleWithIcon>
      <P>
        Parallax needed to figure out a way of creating a virtual recording studio to enable a million unique fans to sing along with David Guetta - their voices would then be sorted and compiled for inclusion in the final song.
      </P>
      <P>
        The main challenge they faced was creating the background architecture to handle the voice recording. UEFA required a stable platform that also looked the part, so they needed a solution that would not only meet their initial brief, but would scale to handle what could potentially be very spiky traffic.
      </P>
      <P>
        They also had to build in the functionality to create and easily share custom content - namely, personalized album artwork featuring names and team flags. From an engagement point of view, this was absolutely essential. On top of that, the site had to work seamlessly on all devices, operate in twelve languages and incorporate embedded video content.
      </P>
    </Column>
  </ResponsiveStack>
)

export default Challenge