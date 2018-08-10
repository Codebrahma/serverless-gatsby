import React from 'react';

import DefaultLayout from 'src/layouts/Default';
import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';
import Prefooter from './Prefooter';

import { ImageContext } from '../../components/ImageContextHOC';

const EventGateway = ({ data }) => (
  <ImageContext.Provider value={{...data}}>
    <DefaultLayout
      prefooter={Prefooter}
      transparentHeader
    >  
      <Hero />
      <UseCase />
      {
        /*
        
        <Features /> 
        */
      }
    </DefaultLayout>
  </ImageContext.Provider>
);

export default EventGateway;

export const query = graphql`
  query EventGatewayImgQuery {
    gatewayIcon: imageSharp(id: { regex: "/group-6/" }) {
      resolutions(width: 86) {
        ...GatsbyImageSharpResolutions_tracedSVG
      }
    }
    gatewayIllustration: imageSharp(id: { regex: "/gateway-illustration.png/" }) {
      sizes(maxWidth: 744) {
        ...GatsbyImageSharpSizes
      }
    }
    useCase1: imageSharp(id: { regex: "/gateway-illustration1.png/" }) {
      sizes(maxWidth: 360) {
        ...GatsbyImageSharpSizes
      }
    }
    useCase2: imageSharp(id: { regex: "/gateway-illustration2.png/" }) {
      sizes(maxWidth: 360) {
        ...GatsbyImageSharpSizes
      }
    }
    useCase3: imageSharp(id: { regex: "/gateway-illustration3.png/" }) {
      sizes(maxWidth: 360) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;