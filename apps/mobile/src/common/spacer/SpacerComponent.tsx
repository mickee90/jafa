// import styled from '@emotion/native';
import React from 'react';
import { View } from 'react-native';

type Props = {
  size?: number;
  horizontal?: boolean;
};

export const SpacerComponent = ({ size = 8, horizontal = false }: Props) => {
  const defaultValue = 'auto';

  return (
    <View
      style={{
        width: horizontal ? size : defaultValue,
        height: !horizontal ? size : defaultValue,
      }}
    />
  );
  // return <Spacer size={size} horizontal={horizontal}></Spacer>;
};

// const Spacer = styled.View`
//   width: ${(props) => (props.horizontal ? props.size : 'auto')},
//   height: !horizontal ? size : defaultValue,
// `;
