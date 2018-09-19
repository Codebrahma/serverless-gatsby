import styled from 'styled-components'
import { Row } from 'serverless-design-system/src'

export default styled(Row)`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;


    .breadcrumbs {
      margin: 0;
      padding: 0;
    }
    .item {
      display: inline-flex;
      position: relative;
      a {
        text-decoration: none;
        border: none !important;
      }
      &:after {
        content: ' › ';
        color: #a1a1a1;
        width: 20px;
        margin: 0 2px;
        display: inline-flex;
        justify-content: center;
      }
      &:first-of-type {
        margin-left: 0px;
      }
      &:last-of-type:after {
        content: '';
      }
    }
    .current {
      a {
        font-weight: 600;
      }
    }

`
