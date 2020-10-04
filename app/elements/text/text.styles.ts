import styled from 'styled-components/native';

import { addStyles } from '../../helpers';
import { IStyles } from '../../types/index';

export const StyledText = styled.Text<IStyles>`
  padding: 5px 20px;
  font-size: 16px;

  ${(props) => addStyles(props.styles)}
`;
