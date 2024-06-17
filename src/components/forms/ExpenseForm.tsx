import { useForm } from 'react-hook-form';
import Input from '../shared/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { expenseSchema } from '@/schemas/expense-schema';
import z from 'zod';
import Button from '../shared/Button';
import Breadcrumbs from '../shared/Breadcrumbs';

type ExpenseFormInputs = z.infer<typeof expenseSchema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormInputs>({
    resolver: zodResolver(expenseSchema),
  });

  const addExpenseHandler = (data: ExpenseFormInputs) => {
    console.log(data);
  };
  return (
    <>
      <Breadcrumbs
        title={'Add Expense'}
        breadcrumbs={[
          {
            label: 'Expenses',
            href: '/dashboard/expenses',
          },
          {
            label: 'Add Expense',
            href: '/dashboard/add-expense',
          },
        ]}
      />
      <form
        onSubmit={handleSubmit(addExpenseHandler)}
        className="form flex-column"
      >
        <section className="form-section flex-column">
          <h3>Expense Details</h3>
          <div className="form-row flex">
            <Input
              label="Expense Name"
              placeholder="Enter name of the expense"
              id="expense-name"
              register={register('expense_name')}
              isRequired={true}
              error={errors.expense_name?.message}
            />
            <Input
              label="Amount"
              placeholder="Enter amount that you spent"
              id="amount"
              register={register('amount')}
              isRequired={true}
              error={errors.amount?.message}
            />
          </div>
          <div className="form-row flex">
            <Input
              label="Date & Time"
              placeholder="Enter date of the purchase"
              id="date"
              register={register('date')}
              isRequired={true}
              error={errors.date?.message}
            />
            <Input
              label="Place"
              placeholder="Enter place of the expense"
              id="place"
              register={register('place')}
              isRequired={true}
              error={errors.place?.message}
            />
          </div>
          <div className="form-row flex">
            <Input
              label="Category"
              placeholder="Enter Category"
              id="category"
              register={register('category')}
              isRequired={true}
              error={errors.category?.message}
            />
            <Input
              label="Payment Method"
              placeholder="Enter mode of payment"
              id="payment"
              register={register('paymentMode')}
              isRequired={true}
              error={errors.paymentMode?.message}
            />
          </div>
        </section>
        <section className="form-button-group flex">
          <Button variant="primary" label="Submit" type="submit" />
        </section>
      </form>
    </>
  );
};

export default ExpenseForm;
