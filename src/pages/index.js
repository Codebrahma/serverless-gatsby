import React from 'react'

import Testimonial from 'src/fragments/Testimonial';
import DefaultLayout from 'src/layouts/Default';

import Hero from './home/Hero';
import Benefits from './home/Benefits';
import PlatformFeatures from './home/PlatformFeatures';
import Prefooter from './home/Prefooter';
import TrustedClients from './home/TrustedClients';
import DefaultLayout from '../layouts/Default';
import { ImageContext } from '../components/ImageContextHOC';

const Home = ({ data }) => {
   return (
     <ImageContext.Provider value={{...data}}>
      <DefaultLayout
        prefooter={Prefooter}
        transparentHeader
      >
        <Hero />
        <Benefits />
        <Testimonial />
        <PlatformFeatures />
        <TrustedClients />
      </DefaultLayout>
    </ImageContext.Provider>
  );
 }

export default Home;

export const query = graphql`
  query HomeImgQuery {
    frameworkImage: imageSharp(id: { regex: "/illustration-1/" }) {
      resolutions(height: 86) {
        ...GatsbyImageSharpResolutions
      }
    }
    dashboardImage: imageSharp(id: { regex: "/illustration-2/" }) {
      resolutions(width: 70) {
        ...GatsbyImageSharpResolutions
      }
    }
    gatewayImage: imageSharp(id: { regex: "/illustration-3/" }) {
      resolutions(width: 70) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
