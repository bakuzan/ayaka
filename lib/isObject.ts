import Types from './constants/types';
import { isTypeOf } from './isTypeOf';

export const isObject = isTypeOf(Types.object);
