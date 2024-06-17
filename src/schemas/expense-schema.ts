import { Category, PaymentMode } from '@/constants/variables';
import { z } from 'zod';

export const expenseSchema = z.object({
  expense_name: z
    .string()
    .min(1, 'Expense Name is required')
    .max(50, 'Expense name cannot exceed 50 characters'),
  amount: z.number().min(1, 'Amount is required'),
  date: z.date(),
  place: z.string().min(1, 'Place is required'),
  category: z.nativeEnum(Category, {
    errorMap: () => ({ message: 'Category is required' }),
  }),
  paymentMode: z.nativeEnum(PaymentMode, {
    errorMap: () => ({ message: 'Payment Mode is required' }),
  }),
});
