import React from 'react';
import { InputProps } from './types';

const EMPTY_VALUE = '';

export const Select: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onBlur,
  name,
  onChange,
}) => {
  const empty = value === '';

  return (
    <div className="select__wrap">
      <div>
        <label className="select__label">{label}</label>
      </div>
      <div>
        <select
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          className={`select__select ${empty ? 'empty' : ''}`}
          value={value}
        >
          <option value={EMPTY_VALUE} hidden disabled>
            {placeholder}
          </option>
          <option value="x1">1111111</option>
          <option value="x2">2222222</option>
          <option value="x3">3333333</option>
          <option value="x4">4444444</option>
        </select>
      </div>
    </div>
  );
};
