import axios from "axios";

export const getPayments = () => axios.get("http://backend/api/payments/total");
export const getInvoices = () => axios.get("http://backend/api/invoices/count");
