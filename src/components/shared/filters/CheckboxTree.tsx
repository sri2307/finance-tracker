import { FilterOption } from '@/types/filter-interface';
import React, { useState } from 'react';

interface CheckboxTreeProps {
  options: FilterOption[];
  onChange: (selected: string[]) => void;
}

const CheckboxTree: React.FC<CheckboxTreeProps> = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const handleParentChange = (option: FilterOption, isChecked: boolean) => {
    const getAllValues = (option: FilterOption): string[] => {
      let values = [option.value];
      if (option.children) {
        option.children.forEach((child) => {
          values = values.concat(getAllValues(child));
        });
      }
      return values;
    };

    const allValues = getAllValues(option);
    let newSelectedOptions: string[] = [];

    if (isChecked) {
      newSelectedOptions = [...new Set([...selectedOptions, ...allValues])];
    } else {
      newSelectedOptions = selectedOptions.filter(
        (value) => !allValues.includes(value),
      );
    }

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const handleChildChange = (value: string) => {
    const newSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value];
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const toggleExpand = (value: string) => {
    setExpanded((prev) => ({ ...prev, [value]: !prev[value] }));
  };

  const renderTree = (options: FilterOption[], level: number = 0) => {
    return options.map((option) => (
      <div key={option.value} style={{ marginLeft: level * 20 }}>
        <div className="checkbox-tree-item">
          {option.children && (
            <button
              onClick={() => toggleExpand(option.value)}
              className="expand-button"
            >
              {expanded[option.value] ? '▼' : '►'}
            </button>
          )}
          <input
            type="checkbox"
            id={option.value}
            name={option.label}
            checked={selectedOptions.includes(option.value)}
            onChange={() =>
              handleParentChange(
                option,
                !selectedOptions.includes(option.value),
              )
            }
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
        {option.children && expanded[option.value] && (
          <div className="checkbox-tree-children">
            {renderTree(option.children, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return <div>{renderTree(options)}</div>;
};

export default CheckboxTree;
