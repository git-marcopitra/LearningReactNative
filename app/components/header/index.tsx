import React, { FC } from 'react';

import { Text } from '../../elements';
import { ScreenProps } from '../../screens/screen.types';
import { HeaderWrapper } from './header.styles';

interface Props extends ScreenProps {
  back?: boolean;
}

const Header: FC<Props> = ({ back }) => (
  <HeaderWrapper darkBlue>
    <Text center title white>
      LearningApp
    </Text>
  </HeaderWrapper>
);

export default Header;
