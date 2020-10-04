import React, { FC } from 'react';

import { ListPlayers, Layout } from '../../components';
import { ScreenProps } from '../screen.types';

const ListScreen: FC<ScreenProps> = (props) => (
  <Layout>
    <ListPlayers {...props} />
  </Layout>
);

export default ListScreen;
