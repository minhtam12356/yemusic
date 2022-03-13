import React, { FC } from 'react';

import classNames from 'classnames';
import './styles.scss';

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  suffix: React.ReactNode;
  fullWidth: boolean;
}

export const Input: FC<InputProps> = ({ suffix, fullWidth = false, ...otherProps }) => {
  return (
    <div className={classNames('cpn-input', fullWidth && 'cpn-input--full-width')}>
      <input className="cpn-input__input" type="text" {...otherProps} />
      {suffix && <div className="cpn-input__icon">{suffix}</div>}
    </div>
  );
};

export default Input;
