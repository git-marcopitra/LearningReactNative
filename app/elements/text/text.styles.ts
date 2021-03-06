import styled from 'styled-components/native';

import { addStyles } from '../../helpers';
import { IStyles } from '../../types/index';

export const StyledText = styled.Text<IStyles>`
  ${(props) => addStyles(props.styles)}
`;
