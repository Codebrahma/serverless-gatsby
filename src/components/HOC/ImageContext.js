import React from 'react';

import pick from '../../helpers/pick';

export const ImageContext = React.createContext()

const ImageContextHOC = (Component, consumedProps) => (props) => 
  <ImageContext.Consumer>
    {
      (consumableProps) => {
        return (
          <Component
            {...pick(consumableProps, consumedProps)}
            {...props}
          />
        )
      }
    }
  </ImageContext.Consumer>
;

export default ImageContextHOC