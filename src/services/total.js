import { get } from './request';

export const TOTAL_BASE_URL = 'http://localhost:7891/api/v1/total';

export const getTotals = () => {
  return get(TOTAL_BASE_URL);
};
