import { get } from './request';
const PORTFOLIO_BASE_URL = 'http://localhost:7891/api/v1/portfolio';

export const fetchPortfolio = () => get(`${PORTFOLIO_BASE_URL}`);
