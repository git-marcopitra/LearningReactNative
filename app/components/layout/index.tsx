import React, { FC } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import { Color } from '../../constants/pallet';

const Layout: FC = ({ children }) => (
  <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={{ flex: 0, backgroundColor: Color.DarkBlue }} />
    <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    <SafeAreaView style={{ flex: 0, backgroundColor: Color.DarkBlue }} />
  </>
);

export default Layout;
