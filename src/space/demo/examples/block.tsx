/**
 * title: 按钮状态
 * description: 按钮有信息、成功、警告、错误四种状态。通过设置 `status` 为 `success` `error` 分别把按钮设为成功、错误状态。若不设置 `status`，则为默认按钮。
 */
import { Button, Space } from '@arvin/react-ui';
import React from 'react';

export default () => {
  return (
    <>
      <Space>
        <Button status="info">Info</Button>
        <Button status="success">Success</Button>
        <Button status="warning">Warning</Button>
        <Button status="error">Error</Button>
      </Space>
      <Space>
        <Button status="info">Info</Button>
        <Button status="success">Success</Button>
        <Button status="warning">Warning</Button>
        <Button status="error">Error</Button>
      </Space>
    </>
  );
};
