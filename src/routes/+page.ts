import type { PageLoad } from './$types';
import { definitions } from './definitions';

export const load: PageLoad = () => {
  return {
    definitions: definitions
  };
};
