import React from 'react'

import { Features } from 'src/fragments'

const ourValuesContent = [
  { header: 'Radical Candor', content: 'We have the courage to give and receive clear and constructive feedback that challenges us to do better, but also shows that we care.' },
  { header: 'Camaraderie', content: 'We are a close-knit team that respects and supports each other. We celebrate our successes and have fun together.' },
  { header: 'Collaboration', content: 'We know that it takes the whole team to succeed and when one of us wins we all win. We offer to help each other and strive to remove any roadblocks slowing our teammates down. We communicate expectations clearly through asynchronous communication and ask for help when we need it.' },
  { header: 'Simplicity is King', content: 'It’s each to overly complicate language, code, and projects. We strive to create the most simple and elegant solutions. When communicating we ask, “How can I say this in five words instead of ten?”' },
]

const OurValues = () => (
  <Features features={ourValuesContent} />
)

export default OurValues