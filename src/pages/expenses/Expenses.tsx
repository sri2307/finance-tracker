import Button from '@/components/shared/Button';
import FilterAccordion from '@/components/shared/filters/FilterAccordion';
// import FilterAccordion from '@/components/shared/filters/FilterAccordion';
import { useAppDispatch } from '@/hooks/rtk';
import { fetchExpenses } from '@/store/actions/expenses-actions';
import { Filter } from '@/types/filter-interface';
import React, { useEffect, useState } from 'react';

const filters: Filter[] = [
  {
    type: 'multiSelect',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
    label: 'Multi Select Filter',
  },
  {
    type: 'checkboxTree',
    options: [
      {
        label: 'Parent 1',
        value: 'parent1',
        children: [
          {
            label: 'Child 1.1',
            value: 'child1.1',
            children: [
              {
                label: 'Grandchild 1.1.1',
                value: 'grandchild1.1.1',
                children: [
                  {
                    label: 'Great-Grandchild 1.1.1.1',
                    value: 'great-grandchild1.1.1.1',
                  },
                  {
                    label: 'Great-Grandchild 1.1.1.2',
                    value: 'great-grandchild1.1.1.2',
                  },
                ],
              },
              { label: 'Grandchild 1.1.2', value: 'grandchild1.1.2' },
            ],
          },
          { label: 'Child 1.2', value: 'child1.2' },
        ],
      },
      { label: 'Parent 2', value: 'parent2' },
    ],
    label: 'Checkbox Tree Filter',
  },
  {
    type: 'dateRange',
    options: [],
    label: 'Date Range Filter',
  },
];

const Expenses = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<{ [key: string]: any }>(
    {},
  );
  const dispatch = useAppDispatch();

  const handleApplyFilters = (filters: { [key: string]: any }) => {
    setAppliedFilters(filters);
    setIsFilterOpen(false);
  };

  console.log(appliedFilters);

  useEffect(() => {
    dispatch(fetchExpenses(null));
  }, []);

  return (
    <div>
      <h1>Filter Component</h1>
      <Button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        variant="primary"
        label="Open Filters"
      >
        {isFilterOpen ? 'Close Filters' : 'Open Filters'}
      </Button>
      <div className={`filter-container ${isFilterOpen ? 'open' : ''}`}>
        <FilterAccordion filters={filters} onApply={handleApplyFilters} />
      </div>
      <div>
        <h2>Applied Filters:</h2>
        <pre>{JSON.stringify(appliedFilters, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Expenses;
