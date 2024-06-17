import { api } from '../api';

export const ExpenseApi = api.injectEndpoints({
  endpoints: (build) => ({
    getExpenses: build.query({
      query: () => ({
        url: '/expenses',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});
