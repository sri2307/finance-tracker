export type FilterType = 'multiSelect' | 'checkboxTree' | 'dateRange';

export interface FilterOption {
  label: string;
  value: string;
  children?: FilterOption[];
}

export interface Filter {
  type: FilterType;
  options: FilterOption[];
  label: string;
}
