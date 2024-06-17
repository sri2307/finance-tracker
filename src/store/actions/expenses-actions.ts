import { ExpenseApi } from '../services/expenses/expenses';

export const fetchExpenses = (payload: null) => async (dispatch: any) => {
  dispatch(ExpenseApi.endpoints.getExpenses.initiate(payload));
};
