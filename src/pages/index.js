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
export const pageQuery = graphql`
query HeaderImageQuery {
  imageSharp(id: { regex: "/bolt/" }) {
    resolutions(width: 200) {
      src
    }
  }
}
`