import React, { FC } from 'react';

import { Text } from '../../elements';
import { ScreenProps } from '../../screens/screen.types';
import { BaseLayout } from '../shared/base-layout';

const ListPlayers: FC<ScreenProps> = ({ navigation }) => (
  <BaseLayout navigation={navigation}>
    <Text center title blue>
      Hello world, list!
    </Text>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam est quia, quisquam quas mollitia! Sunt ducimus nemo animi eius iure magnam, consequuntur in nisi, rerum itaque repellat dignissimos minima.
    </Text>
  </BaseLayout>
);

export default ListPlayers;