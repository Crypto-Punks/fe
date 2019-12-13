import { get } from './request';
import { baseUrl } from './dbUrl';
export const TOTAL_BASE_URL = `${baseUrl}/api/v1/total`;

export const getTotals = () => {
  return get(TOTAL_BASE_URL);
};
