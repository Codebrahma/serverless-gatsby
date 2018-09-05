import styled from 'styled-components'
import { RadioButton } from 'serverless-design-system/src'
import checkedRadio from 'src/assets/images/checked-radio.png'
import unCheckedRadio from 'src/assets/images/unchecked-radio.png'

export default styled(RadioButton)`
  appearance: none;

  &:before {
    content: "";
    display: inline-block;
    margin-top: 2px;
    margin-left: -2px;
    width: 18px;
    height: 16px;
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
