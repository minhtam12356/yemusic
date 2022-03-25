import React, { FC } from 'react';

import classNames from 'classnames';
import './styles.scss';

export interface InputProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'prefix'> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input: FC<InputProps> = ({ className, disabled, fullWidth, prefix, suffix, ...otherProps }) => {
  return (
    <label className={classNames('a-input-group', disabled && '-disabled', fullWidth && '-full-width')}>
      {prefix && <span className="a-input-group__addon">{prefix}</span>}
      <input className="a-input-group__input" disabled={disabled} {...otherProps} />
      {suffix && <span className="a-input-group__addon">{suffix}</span>}
    </label>
  );
};

export default Input;
