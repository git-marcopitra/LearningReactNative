import { FlattenSimpleInterpolation } from "styled-components";

export interface IObject<T> {
  [key: string]: T;
}

export type TStylesObject = IObject<FlattenSimpleInterpolation>;

export type IStyles = {
  styles?: TStylesObject;
  children?: React.ReactNode;
};