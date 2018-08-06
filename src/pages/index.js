import React from 'react'
import Img from "gatsby-image";
import { Box } from 'serverless-design-system/src';
import Hero from './home/Hero';
import Benefits from './home/Benefits';
import Testimonial from './home/Testimonial';
import PlatformFeatures from './home/PlatformFeatures';
import TrustedClients from '../components/TrustedClients';


 const Home = ({ data }) => {
   return (
    <Box width={1}>
      <Hero />
      <Benefits />
      <Testimonial />
      <PlatformFeatures />
      <TrustedClients />
    </Box>
  );
 }

export default Home;

// TODO: Pass down all images from each route page.
// Bolt image is shared as example.
export const pageQuery = graphql`
query HeaderImageQuery {
  headerImage: imageSharp(id: { regex: "/bolt/" }) {
    sizes(maxWidth: 1240 ) {
      ...GatsbyImageSharpSizes
    }
  }
}
`