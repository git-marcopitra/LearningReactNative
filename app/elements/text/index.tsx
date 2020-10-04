import React, { FC } from 'react';
import { TextProps } from 'react-native';
import { css } from 'styled-components/native';

import { Color } from '../../constants/pallet';
import { TStylesObject } from '../../types';
import { StyledText } from './text.styles';

export interface Props extends TextProps {
  center?: boolean;
  size?: string;
  title?: boolean;
  white?: boolean;
  darkBlue?: boolean;
  blue?: boolean;
}

const Text: FC<Props> = ({
  center,
  size,
  title,
  white,
  darkBlue,
  blue,
  ...props
}) => {
  const Styles = {} as TStylesObject;

  if (title)
    Styles.title = css`
      font-size: 30px;
      font-weight: bold;
    `;

  if (white)
    Styles.white = css`
      color: white;
    `;

  if (center)
    Styles.center = css`
      text-align: center;
    `;

  if (darkBlue)
    Styles.darkBlue = css`
      color: ${Color.DarkBlue};
    `;

  if (blue)
    Styles.blue = css`
      color: ${Color.Blue};
    `;
  
  if (size)
    Styles.size = css`
      font-size: ${size};
    `;

  return <StyledText {...props} styles={Styles} />;
};

export default Text;
