import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

import { View } from '../../elements';

export const FooterWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-around;
`;

export const AntIcons = styled(Icon)`
  color: white;
  font-size: 25px;
  padding: 10px;
`;

export const FooterItem = styled.TouchableWithoutFeedback`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
