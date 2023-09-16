import classNames from 'classnames';
import React from 'react';
import { EShape, ESize, EType } from '../config';
import { createCssScope } from '../utils';
import './style/index.scss';
import { IButtonProps } from './types';

const Button = (props: IButtonProps) => {
  const {
    type = EType.default,
    shape = EShape.default,
    size = ESize.middle,
    status = '',
    loading = true,
    disabled = false,
    children = null,
    style = {},
    className = '',
    onClick = () => {},
  } = props;
  const bem = createCssScope('button');
  const classname = classNames(
    bem([type, shape, status, size], {
      loading: loading,
      disabled,
    }),
    className,
  );

  return (
    <button type="button" className={classname} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
