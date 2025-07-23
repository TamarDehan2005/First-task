import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:7106';

export const getPaymentsTotal = () => axios.get(`${API_URL}/api/payments/total`);
export const getPaymentsPercentageChange = () => axios.get(`${API_URL}/api/payments/percentage-change`);
export const getInvoicesCount = () => axios.get(`${API_URL}/api/invoices/count`);
export const getInvoicesPercentageChange = () => axios.get(`${API_URL}/api/invoices/percentage-change`);
