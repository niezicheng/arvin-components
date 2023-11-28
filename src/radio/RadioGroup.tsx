import React, { Children, useCallback, useEffect, useState } from 'react';
import { TOption } from '../types';
import Radio from './Radio';
import RadioButton from './RadioButton';
import { IRadioGroupProps } from './types';

const RadioGroup: React.FC<IRadioGroupProps> = ({
  value: propsValue,
  defaultValue = '',
  disabled = false,
  name,
  size = 'middle',
  optionType = 'default',
  buttonType = 'outline',
  options,
  onChange,
  children,
  className,
  style,
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  const _style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ...style,
  };

  useEffect(() => {
    if (propsValue === undefined) return;
    setValue(propsValue);
  }, [propsValue]);

  const handleChange = useCallback((val: string) => {
    setValue(val);
    onChange?.(val);
  }, []);

  if (Array.isArray(options) && options.length > 0) {
    return (
      <div className={className} style={style}>
        {options.map((option: TOption | number | string) => {
          const _value = (option as TOption)?.value || (option as string);
          const _label =
            (option as TOption)?.label || (option as string | React.ReactNode);
          const _disabled = (option as TOption)?.disabled || disabled;
          const RadioTypeCom = optionType === 'default' ? Radio : RadioButton;

          return (
            <RadioTypeCom
              key={_value}
              name={name}
              checked={_value === value}
              value={_value}
              disabled={_disabled}
              buttonType={buttonType}
              onChange={handleChange}
            >
              {_label}
            </RadioTypeCom>
          );
        })}
      </div>
    );
  }

  return (
    <div className={className} style={_style}>
      {children
        ? Children.map(children, (item) => {
            if (React.isValidElement(item)) {
              return React.cloneElement(item, {
                key: (item.props as any).value,
                // @ts-ignore
                checked: value === item.props.value,
                disabled: (item.props as any).disabled || disabled,
                name,
                size,
                buttonType,
                onChange: handleChange,
              });
            }
            return null;
          })
        : null}
    </div>
  );
};

export default RadioGroup;
