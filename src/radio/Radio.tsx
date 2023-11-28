import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import { createCssScope } from '../utils';
import './style/radio.scss';
import { IRadioProps } from './types';

const Radio: React.FC<IRadioProps> = ({
  name,
  value,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  children,
  className,
  style,
}) => {
  const bem = createCssScope('radio');
  const classname = classNames(
    bem([], {
      disabled,
    }),
    className,
  );
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

  useEffect(() => {
    if (checked === undefined) return;
    setIsChecked(checked);
  }, [checked]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const { value } = e.target;
    setIsChecked(true);
    onChange?.(value);
  }, []);

  return (
    <div className={classname} style={style}>
      <input
        name={name}
        type="radio"
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      {React.isValidElement(children) ? children : <label>{children}</label>}
    </div>
  );
};

export default Radio;
