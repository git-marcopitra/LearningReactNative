import React, { FC } from 'react';

import { View } from '../../../elements';
import { ScreenProps } from '../../../screens/screen.types';
import { Footer, Header } from '../../index';
import { AdaptiveWrapper, Content } from './base-layout.styles';

interface Props extends ScreenProps {
  headerLess?: boolean;
  footerLess?: boolean;
}

export const BaseLayout: FC<Props> = ({
  children,
  headerLess,
  footerLess,
  ...navigator
}) => (
  <View flex>
    {!headerLess && <Header {...navigator} />}
    <AdaptiveWrapper>
      <Content>{children}</Content>
      {!footerLess && <Footer {...navigator} />}
    </AdaptiveWrapper>
  </View>
);
