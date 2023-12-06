/**
 * title: 自动换行
 * description: 自动换行。
 */
import { Button, Space } from '@arvin/react-ui';
import React from 'react';

export default () => {
  return (
    <Space size={[8, 16]} wrap>
      {new Array(18).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};
