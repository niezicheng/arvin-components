/**
 * title: 按钮形状
 * description: 按钮圆形、半圆形两种状态。通过设置 `shape` 为 `circle` `round` 分别把按钮设为圆形、半圆形状态。若不设置 `shape`，则为默认按钮。
 */
import { Button, Space } from '@arvin/react-ui';
import React, { useMemo } from 'react';

export default () => {
  const splitDom = useMemo(() => {
    return <span style={{ color: '#cccccc' }}>|</span>;
  }, []);

  return (
    <Space direction="vertical">
      <Space split={splitDom} align="center">
        <Button type="link">Link</Button>
        <Button type="link">Link</Button>
        <Button type="link">Link</Button>
      </Space>
    </Space>
  );
};
