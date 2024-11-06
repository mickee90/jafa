import React from 'react';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native';

export const ScreenComponent = ({ children }: React.PropsWithChildren) => (
  <SafeArea>
    <ScrollContainer>{children}</ScrollContainer>
  </SafeArea>
);

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  padding-horizontal: 8px;
  background-color: #010205;
`;
