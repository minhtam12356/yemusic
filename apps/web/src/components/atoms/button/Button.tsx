import React, { FC } from 'react';

import classNames from 'classnames';
import './styles.scss';

export interface ButtonProps {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  fluid?: boolean;
  round?: boolean;
  outline?: boolean;
  disabled?: boolean;
  uppercase?: boolean;
  size: 'sm' | 'lg';
  type: 'submit' | 'button';
  text: string;
}

export const Button: FC<ButtonProps> = ({
  disabled,
  size,
  fluid,
  uppercase,
  text,
  type,
  prefix,
  suffix,
  ...otherProps
}) => {
  const classnames = classNames('a-button-group', {
    uppercase: uppercase,
    'is-fluid': fluid,
    [`-size-${size}`]: size,
    // '-disabled': disabled,
  });

  return (
    <button className={classnames}>
      {prefix && <span className="a-button-group__addon">{prefix}</span>}
      {text}
      {suffix && <span className="a-button-group__addon">{suffix}</span>}
    </button>
  );
};

export default Button;
