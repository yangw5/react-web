import { get, post, downloadFile } from './tools';
import * as config from './config';
export const getauter = () => get({ url: config.GEUAUTER });
