import * as config from './config';
import { get, post } from './toots';

export const felsit = () => get({ url: config.FE_LIST });
export const felsit2 = () => get({ url: config.FE_LIST2 });