import React from 'react'

import { Flex, Box, P, ResponsiveStack } from 'serverless-design-system/src'
import NavLink from 'src/components/NavLink'
import { termsOfService, privacyPolicy } from 'src/constants/urls'

// Renders Company details
const CompanyDetails = () => (
  <Box width={1}>
    <Box width={[1, 1, 1 / 2]}>
      <P fontSize={0} fontFamily={'Soleil'} lineHeight={3} opacity='0.5' m={0}>
        Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan,
        Poland, Nebraska &amp; Thailand
      </P>
    </Box>
    <ResponsiveStack pt={4} alignItems={['left', 'left', 'center']}>
      <Box width={[1 / 2, 1 / 2, 1]}>
        <P m={0} fontSize={0}>
          Serverless, Inc. © 2018
        </P>
      </Box>

      <Flex color='gray.3' width={1}>
        <Box>
          <NavLink to={termsOfService} crossDomain>
            <P fontSize={0}>terms of service</P>
          </NavLink>
        </Box>
        <Box ml={2}>
          <NavLink to={privacyPolicy} crossDomain>
            <P fontSize={0}>privacy policy</P>
          </NavLink>
        </Box>
      </Flex>
    </ResponsiveStack>
  </Box>
)

export default CompanyDetails
