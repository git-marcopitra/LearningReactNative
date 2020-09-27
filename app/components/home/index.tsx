/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';

import { Text } from '../../elements';
import { ScreenProps } from '../../screens/screen.types';
import { BaseLayout } from '../shared/base-layout';
import Welcome from '../svg/welcome';
import { ImageWrapper } from './home.styles';

const Home: FC<ScreenProps> = ({ navigation }) => {
  return (
    <BaseLayout navigation={navigation}>
      <ImageWrapper>
        <Welcome />
      </ImageWrapper>

      <Text title blue center>
        Bem vindo a nossa página inicial
      </Text>
    </BaseLayout>
  );
};

export default Home;
