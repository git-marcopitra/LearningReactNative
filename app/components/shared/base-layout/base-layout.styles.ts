import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const AdaptiveWrapper = styled.View`
  flex: 1;
  flex-direction: ${Platform.OS === 'ios' ? 'column' : 'column-reverse'};
`;

export const Content = styled.View`
  flex: 1;
`;
