import React, { FC } from 'react';

import { Route } from '../../constants/route';
import { ScreenProps } from '../../screens/screen.types';
import { AntIcons, FooterItem, FooterWrapper } from './footer.styles';

const Footer: FC<ScreenProps> = ({ navigation }) => (
  <FooterWrapper darkBlue>
    <FooterItem onPress={() => navigation.push(Route.Home)}>
      <AntIcons name="home" />
    </FooterItem>
    <FooterItem onPress={() => navigation.push(Route.List)}>
      <AntIcons name="bars" />
    </FooterItem>
    <FooterItem onPress={() => navigation.push(Route.Add)}>
      <AntIcons name="plus" />
    </FooterItem>
    <FooterItem onPress={() => navigation.push(Route.Traffig)}>
      <AntIcons name="swap" />
    </FooterItem>
    <FooterItem onPress={() => navigation.push(Route.User)}>
      <AntIcons name="user" />
    </FooterItem>
  </FooterWrapper>
);

export default Footer;
