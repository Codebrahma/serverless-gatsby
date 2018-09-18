import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Column } from 'serverless-design-system/src'
import redHighlighter from 'src/assets/images/red-highlighter.png'

const ContentWrapper = styled(Column)`
  overflow: hidden;

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
    margin-top: 10px;
    position: relative;

    & > p {
      margin-top: 5px;
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
      height: 39px;
      top: 0;
      width: 20px;
      background: url(${redHighlighter});
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

  img {
    margin-top: 16px;
    margin-bottom: 16px;
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

  @media screen and (max-width: 992px) {
    blockquote {
      & > p {
        padding-left: 40px;
      }

      &:before {
        left: 0;
        top: 0;
      }
    }

    iframe {
      width: 100%;
      height: 360px;
    }
  }

  @media screen and (max-width: 412px) {
    iframe {
      width: 100%;
      height: auto;
    }
  }
`

export default class BlogWrapper extends React.Component {
  componentDidMount() {
    const domNode = ReactDOM.findDOMNode(this.ref)
    domNode.querySelectorAll("a > img").forEach((node) => {
      const { parentNode } = node
      parentNode.style.border = 0
      parentNode.style.display = node.style.display = 'block'
      node.style.margin = 'auto'
    })
    domNode.querySelectorAll("iframe").forEach((node) => {
      node.style.display = 'block'
      node.style.margin = 'auto'
    })
    domNode.querySelectorAll("code.hljs").forEach((code) => {
      let number = 1;
      const zero = `<a class="line">${number++}</a>`
      code.innerHTML = zero + code.innerHTML.replace(/\n/g, () => (
        `\n<a class="line">${number++}</a>`
      ))
    })
  }

  render() {
    return (
      <ContentWrapper
        ref = {(ref) => { this.ref = ref }}
        {...this.props}
      />
    )
  }
}
