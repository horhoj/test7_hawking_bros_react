import React, { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
  label: string;
  placeholder: string;
  onBlur: React.FocusEventHandler<HTMLSelectElement>;
}
