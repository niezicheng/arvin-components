/**
 * title: 禁用状态
 * description: 按钮有正常、禁用两种状态。通过设置 `disabled` 为 `false` 和 `true` 分别把按钮设为正常、禁用状态。若不设置 `disabled`，则为正常按钮。
 */
import { Button, Space } from '@arvin/react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <Button disabled={true}>disabled</Button>
      <Button disabled={false}>not disabled</Button>
    </Space>
  );
};
