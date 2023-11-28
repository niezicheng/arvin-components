/**
 * title: 单选组合
 * description: 一组互斥的 Radio 配合使用。
 */
import { Radio } from '@arvin/react-ui';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('1');

  const onChange = (val?: number | string) => {
    console.log('radio checked', val);
    setValue(val as string);
  };

  return (
    <Radio.Group value={value} onChange={onChange}>
      <Radio value={'1'}>A</Radio>
      <Radio value={'2'}>B</Radio>
      <Radio value={'3'}>C</Radio>
      <Radio value={'4'}>D</Radio>
    </Radio.Group>
  );
};
