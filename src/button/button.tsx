
import React from 'react';
import './style/index.scss'
import { createCssScope } from '../utils'
import { IButtonProps } from './types'
import { EShape, ESize, EType } from '../config';

const Button = (props: IButtonProps) => {
  const {
    type = EType.default,
    shape = EShape.default,
    size = ESize.middle,
    status = '',
    loading = true,
    disabled = false,
    children = null,
  } = props
  const bem = createCssScope('button');
  const classname = bem([type, shape, status, size], {
    loading: loading,
    disabled,
  });

  return (
    <button type='button' className={classname}>
      {children}
    </button>
  )
};

export default Button
