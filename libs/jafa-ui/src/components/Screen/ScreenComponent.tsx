import React from 'react';
import styled from '@emotion/native';

export const ScreenComponent = ({ children }: React.PropsWithChildren) => {
  return <Container>{children}</Container>;
};

const Container = styled.View`
  flex: 1;
  padding-horizontal: 8px;
  background-color: #010205;
`;
