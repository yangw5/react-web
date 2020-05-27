import { get, post, downloadFile } from './tools';
import queryString from 'query-string';
import * as config from './config';
export const getauter = () => get({ url: config.GEUAUTER });
