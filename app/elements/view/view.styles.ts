import styled from 'styled-components/native';

import { addStyles } from '../../helpers';
import { IStyles } from '../../types';

export const StyledView = styled.View<IStyles>`
  ${(props) => addStyles(props.styles)}
`;
