import styled from 'styled-components'
import { Checkbox } from 'serverless-design-system/src';

export default styled(Checkbox)`
  &:before {
    content: "";
    display: inline-block;
    margin-top: -2px;
    margin-left: -2px;
    width: 18px;
    height: 18px;
    background-size: contain;
    background-image: url(https://serverless.com/_/src/assets/images/unchecked.402f05654fb8ebc664071da486b779f3.png);
  }

  &:checked {
    &:before {
      background-image: url(https://serverless.com/_/src/assets/images/checked.9db08fa8d6d38e9292f0fac4f019d043.png);
    }
  }

  &:focus {
    outline: none;
  }
`
