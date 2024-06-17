import React, { useState } from 'react';

interface DateRangeFilterProps {
  onChange: (range: { startDate: string; endDate: string }) => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ onChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleChange = () => {
    onChange({ startDate, endDate });
  };

  return (
    <div>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={startDate}
        onChange={(e) => {
          setStartDate(e.target.value);
          handleChange();
        }}
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={endDate}
        onChange={(e) => {
          setEndDate(e.target.value);
          handleChange();
        }}
      />
    </div>
  );
};

export default DateRangeFilter;
