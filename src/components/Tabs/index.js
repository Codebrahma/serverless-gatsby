import React from 'react'
import styled from 'styled-components'
import { InlineFlex, Column, Text } from 'serverless-design-system/src'

const TabWrapper = styled(Column)`
  background: ${({ background }) => (background)};
  background-size: ${({ backgroundSize }) => (backgroundSize)};
  background-position: ${({ backgroundPosition }) => (backgroundPosition)};
  background-repeat: ${({ backgroundRepeat }) => (backgroundRepeat)};
  cursor: pointer;

  &:hover {
    span {
      color: ${({ selected, theme: { colors } }) => selected ? colors.white  : colors.gray[3]};
    }
  }
`;

const Tab = ({ datum, onClick, selected, ...styles }) => {
  const containerStyles = !selected ? styles.tabContainerStyle : {
    ...styles.tabContainerStyle,
    ...styles.selectedTabContainerStyle,
  }

  const labelStyles = !selected ? styles.labelStyle : {
    ...styles.labelStyle,
    ...styles.selectedLabelStyle,
  }

  return (
    <TabWrapper
      onClick={() => onClick(datum)}
      selected={selected}
      { ...containerStyles }
    >
      <Text.span {...labelStyles}>
        {datum.label}
      </Text.span>
    </TabWrapper>
  );
}

export default ({
  data,
  selectedValue,
  onTabSelect,
  ...styleProps
}) => (
  <InlineFlex flexDirection={['column', 'column', 'row']}>
    {
      data.map((datum) => (
        <Tab
          datum={datum}
          key={datum.value}
          selected={datum.value === selectedValue}
          onClick={onTabSelect}
          { ...styleProps }
        />
      ))
    }
  </InlineFlex>
)
