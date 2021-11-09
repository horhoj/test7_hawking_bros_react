import React from 'react';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  name,
  onBlur,
  type,
}) => {
  return (
    <div className="input__wrap">
      <div>
        <label className="input__label">{label}</label>
      </div>
      <div>
        <input
          className="input__input"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};
