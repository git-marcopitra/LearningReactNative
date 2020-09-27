/* eslint-disable @typescript-eslint/no-unused-vars */
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { IAddStyles } from './helpers.types';

export const addStyles: IAddStyles = (props) => {
  const styles = css`` as FlattenSimpleInterpolation[];
  if (props)
    Object.values<FlattenSimpleInterpolation>(props).forEach((x) =>
      styles.push(x)
    );
  return styles;
};
