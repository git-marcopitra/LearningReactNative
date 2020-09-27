import React, { FC } from 'react';

import { Home, Layout } from '../../components';
import { ScreenProps } from '../screen.types';

const HomeScreen: FC<ScreenProps> = (props) => (
  <Layout>
    <Home {...props} />
  </Layout>
);

export default HomeScreen;
