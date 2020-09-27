import React, { FC } from 'react';

import { View } from '../../../elements';
import { ScreenProps } from '../../../screens/screen.types';
import { Footer, Header } from '../../index';
import { AdaptiveWrapper, Content } from './base-alyout.styles';

interface Props extends ScreenProps {
  headerLess?: boolean;
}

export const BaseLayout: FC<Props> = ({
  children,
  headerLess,
  ...navigator
}) => (
  <View flex>
    {!headerLess && <Header {...navigator} />}
    <AdaptiveWrapper>
      <Content>{children}</Content>
      <Footer {...navigator} />
    </AdaptiveWrapper>
  </View>
);
