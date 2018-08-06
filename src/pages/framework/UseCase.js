import React from 'react';

import UseCases from '../../components/Fragments/Common/UseCases';

import scaleableAPI from '../../assets/images/scalableAPI.png';
import dataProcessing from '../../assets/images/dataProcessing.png';
import easyAutomation from '../../assets/images/easyAutomation.png';

const cases = [
  {
    title: 'Simple, scaleable APIs',
    description: 'The Serverless Framework provides a simple way to develop infinitely scaleable, pay-per-execution APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live. With native support for AWS API Gatewway, Event Gateway, and more you can utilize the tools you know and trust with a single experience.',
    imgSrc: scaleableAPI,
  },
  {
    title: 'Easy Automation',
    description: 'The Serverless Framework makes automating anything quick and easy. Simply subscribe a function to the event and let the framework take care of the rest.',
    imgSrc: easyAutomation,
  },
  {
    title: 'Data Processing',
    description: 'Transforming data and building data pipelines and has never been easier.',
    imgSrc: dataProcessing,
  },
];

const UseCaseWrapper = () => (
  <UseCases
    cases={cases}
  />
);

export default UseCaseWrapper;