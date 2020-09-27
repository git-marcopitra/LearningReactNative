import React, { FC } from 'react';
import { Platform, StatusBar, ViewProps } from 'react-native';
import { css } from 'styled-components/native';
import { Color } from '../../constants/pallet';
import { TStylesObject } from '../../types';
import { StyledView } from './view.styles';

interface Props extends ViewProps {
  autoHeight?: boolean;
  darkBlue?: boolean;
  flex?: boolean;
  fullWidth?: boolean;
}

const View: FC<Props> = ({
  fullWidth,
  darkBlue,
  flex,
  autoHeight,
  ...props
}) => {

  const Styles = {} as TStylesObject;

  if (fullWidth)
    Styles.fullWidth = css`
      width: 100%;
    `;
  
  if (flex)
    Styles.flex = css`
      flex: 1;
    `;

  if (darkBlue)
    Styles.darkBlue = css`
      background-color: ${Color.DarkBlue};
    `;
  
  if (autoHeight)
    Styles.autoHeight = css`
      height: auto;
    `;
  
  return (<StyledView {...props} styles={Styles} />)
};

export default View;