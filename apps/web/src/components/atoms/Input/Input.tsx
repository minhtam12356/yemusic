import React, { FC } from 'react';

import classNames from 'classnames';
import './styles.scss';

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  suffix?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input: FC<InputProps> = ({ suffix, fullWidth, ...otherProps }) => {
  return (
    <div className={classNames('a-input', fullWidth && 'a-input--full-width')}>
      <input className="a-input__input" {...otherProps} />
      {suffix && <div className="a-input__icon">{suffix}</div>}
    </div>
  );
};

export default Input;
