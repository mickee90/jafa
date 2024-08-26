import React from 'react';
import styled from '@emotion/native';

export const ScreenComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.View`
  flex: 1;
  padding-horizontal: 20;
`;
