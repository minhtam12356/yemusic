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
    <div
      className={classNames(
        'a-input-group-wrapper',
        disabled && 'a-input-group-wrapper--disabled',
        fullWidth && 'a-input-group-wrapper--full-width',
        className
      )}
    >
      <div className="a-input-group">
        {prefix && <div className="a-input-group__addon">{prefix}</div>}
        <input className="a-input-group__input" disabled={disabled} {...otherProps} />
        {suffix && <div className="a-input-group__addon">{suffix}</div>}
      </div>
    </div>
  );
};

export default Input;
