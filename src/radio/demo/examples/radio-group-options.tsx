/**
 * title: Radio.Group 组合 - 配置方式
 * description: 通过配置 options 参数来渲染单选框。也可通过 optionType 参数来设置 Radio 类型。
 */
import { Radio } from '@arvin/react-ui';
import React, { useState } from 'react';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Banana', value: 'Banana' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

export default () => {
  const [value1, setValue1] = useState('Apple');
  const [value2, setValue2] = useState('Apple');
  const [value3, setValue3] = useState('Apple');
  const [value4, setValue4] = useState('Apple');

  const onChange1 = (value: string) => {
    console.log('radio1 checked', value);
    setValue1(value);
  };

  const onChange2 = (value: string) => {
    console.log('radio2 checked', value);
    setValue2(value);
  };

  const onChange3 = (value: string) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };

  const onChange4 = (value: React.SetStateAction<string>) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };

  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange2}
        value={value2}
      />
      <br />
      <br />
      <Radio.Group
        options={options}
        onChange={onChange3}
        value={value3}
        optionType="button"
      />
      <br />
      <Radio.Group
        options={options}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonType="solid"
      />
    </>
  );
};
