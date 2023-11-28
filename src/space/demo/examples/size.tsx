/**
 * title: 按钮尺寸
 * description: 按钮有大、中、小三种尺寸。通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
 */
import { Button, Space } from '@arvin/react-ui';
import React from 'react';

export default () => {
  return (
    <>
      <input type="radio"></input>
      <Space>
        <Button type="primary">Primary</Button>
        <Button type="default">Default</Button>
        <Button type="dashed">Dashed</Button>
      </Space>
      <Space direction="vertical">
        <Button type="primary">Primary</Button>
        <Button type="default">Default</Button>
        <Button type="dashed">Dashed</Button>
      </Space>
    </>
  );
};
