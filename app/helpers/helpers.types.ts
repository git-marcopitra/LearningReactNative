import { FlattenSimpleInterpolation } from "styled-components";

import { TStylesObject } from "../types";

export type IAddStyles = (
  props: TStylesObject | undefined
) => FlattenSimpleInterpolation[];
