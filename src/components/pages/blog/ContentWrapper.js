import React from 'react'
import styled from 'styled-components'
import { Column } from 'serverless-design-system/src'

export default styled(Column)`
  p, li {
    font-family: 'SoleilBk';
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.63;
    color: #5b5b5b;
  }

  blockquote {
    margin: 0;
    position: relative;

    & > p {
      font-family: SoleilBk;
      font-size: 24px;
      font-weight: normal;
      font-style: italic;
      line-height: 1.33;
      color: #000000;
    }

    &:before {
      content: ' ';
      position: absolute;
      height: 48%;
      top: 24%;
      width: 20px;
      background: url('https://i.imgur.com/8ngigUP.png');
      background-size: cover;
      left: -40px;
    }
  }

  a {
    color: #5b5b5b;
    text-decoration: none;
    border-bottom: 1px solid #fd5750;

    &:hover {
      color: #5b5b5b;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'SoleilBk';
    font-size: 32px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: -0.5px;
    color: #000000;
    margin-top: 35px;
    margin-bottom: 15px;
  }

  li {
    padding-top: 15px;
    padding-bottom: 8px;
  }
`
