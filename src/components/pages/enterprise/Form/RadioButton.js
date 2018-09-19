import styled from 'styled-components'
import { RadioButton } from 'serverless-design-system/src'
import checkedRadio from 'src/assets/images/checked-radio.png'
import unCheckedRadio from 'src/assets/images/unchecked-radio.png'

export default styled(RadioButton)`
  appearance: none;
  height: 18px;
  width: 18px;
  margin-top: 2px;

  &:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: -2px
    margin-top: -2px;
    background-position: center;
    background-size: contain;
    background-image: url(${unCheckedRadio});
    background-repeat: no-repeat;
  }

  &:checked {
    &:before {
      background-image: url(${checkedRadio});
    }
  }
`
