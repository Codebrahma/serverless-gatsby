import React from 'react'
import styled from 'styled-components'
import { InlineFlex, Column, Text } from 'serverless-design-system/src'

const TabWrapper = styled(Column)`
  background: ${({ background }) => (background)};
  cursor: pointer;
`;

const Tab = ({ label, value, onClick, selected, ...styles }) => {
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
      onClick={() => onClick(value, label)}
      { ...containerStyles }
    >
      <Text.span {...labelStyles}>
        {label}
      </Text.span>
    </TabWrapper>
  );
}

export default ({
  data,
  selectedValue,
  onTabClick,
  ...styleProps
}) => (
  <InlineFlex
    flexDirection={['column', 'column', 'row']}
  >
    {
      data.map(({ label, value }) => (
        <Tab
          label={label}
          value={value}
          key={value}
          selected={value === selectedValue}
          onClick={onTabClick}
          { ...styleProps }
        />
      ))
    }
  </InlineFlex>
)
