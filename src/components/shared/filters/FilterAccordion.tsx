import React, { useState, useEffect } from 'react';
import MultiSelectCheckbox from './MultiSelectCheckbox';
import CheckboxTree from './CheckboxTree';
import DateRangeFilter from './DateRangeFilter';
import { Filter, FilterOption } from '@/types/filter-interface';

interface FilterAccordionProps {
  filters: Filter[];
  onApply: (selectedFilters: { [key: string]: any }) => void;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
  filters,
  onApply,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: any;
  }>({});

  const handleFilterChange = (label: string, value: any) => {
    setSelectedFilters((prev) => ({ ...prev, [label]: value }));
  };

  const handleApply = () => {
    onApply(selectedFilters);
  };

  const filterOptions = (options: FilterOption[]): FilterOption[] => {
    return options
      .map((option) => {
        const children = option.children ? filterOptions(option.children) : [];
        if (
          option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          children.length > 0
        ) {
          return { ...option, children };
        }
        return null;
      })
      .filter((option) => option !== null) as FilterOption[];
  };

  const renderFilter = (filter: Filter) => {
    switch (filter.type) {
      case 'multiSelect':
        return (
          <MultiSelectCheckbox
            options={filterOptions(filter.options)}
            onChange={(value) => handleFilterChange(filter.label, value)}
          />
        );
      case 'checkboxTree':
        return (
          <CheckboxTree
            options={filterOptions(filter.options)}
            onChange={(value) => handleFilterChange(filter.label, value)}
          />
        );
      case 'dateRange':
        return (
          <DateRangeFilter
            onChange={(value) => handleFilterChange(filter.label, value)}
          />
        );
      default:
        return null;
    }
  };

  const filteredFilters = filters.filter(
    (filter) =>
      filter.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      filterOptions(filter.options).length > 0,
  );

  return (
    <div className="filter-overlay">
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search filters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredFilters.map((filter) => (
          <div key={filter.label}>
            <h3>{filter.label}</h3>
            {renderFilter(filter)}
          </div>
        ))}
        <button onClick={handleApply}>Apply Filters</button>
      </div>
    </div>
  );
};

export default FilterAccordion;
