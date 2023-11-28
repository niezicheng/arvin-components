import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../button';
import { createCssScope } from '../utils';
import './style/radio-button.scss';
import { IRadioButtonProps } from './types';

const RadioButton: React.FC<IRadioButtonProps> = ({
  value,
  checked,
  defaultChecked = false,
  disabled = false,
  size = 'middle',
  buttonType = 'outline',
  onChange,
  children,
  className,
  style,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);
  const bem = createCssScope('radio-button');
  const classname = classNames(
    bem([], {
      checked: isChecked,
      disabled,
    }),
    className,
  );

  useEffect(() => {
    if (checked === undefined) {
      // setIsChecked(defaultChecked);
      return;
    }
    setIsChecked(checked);
  }, [checked]);

  const type = useMemo(() => {
    if (isChecked) return 'primary';
    return 'default';
  }, [buttonType, isChecked]);

  const handleClick = useCallback(() => {
    if (disabled) return;
    setIsChecked(true);
    onChange?.(value || '');
  }, [disabled]);

  return (
    <Button
      className={classname}
      type={type}
      style={style}
      size={size}
      ghost={buttonType === 'outline' && isChecked}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default RadioButton;
