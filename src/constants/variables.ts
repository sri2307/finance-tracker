export const variables = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  AUTH0_DOMAIN: import.meta.env.VITE_AUTH0_DOMAIN,
  AUTH0_CLIENT_ID: import.meta.env.VITE_AUTH0_CLIENT_ID,
};

export enum Category {
  FOOD = 'Food',
  TRANSPORT = 'Transport',
  UTILITIES = 'Utilities',
  ENTERTAINMENT = 'Entertainment',
  OTHER = 'Other',
}

export enum PaymentMode {
  CASH = 'Cash',
  CREDIT_CARD = 'Credit Card',
  DEBIT_CARD = 'Debit Card',
  NET_BANKING = 'Net Banking',
  UPI = 'UPI',
}
