/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { ButtonProps } from 'react-native';

import { StyledButton } from './button.styles';

interface Props extends ButtonProps {}

const Button: FC<Props> = (props) => <StyledButton {...props} />;

export default Button;
