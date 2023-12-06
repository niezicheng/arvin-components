/**
 * title: 禁用状态
 * description: 按钮有正常、禁用两种状态。通过设置 `disabled` 为 `false` 和 `true` 分别把按钮设为正常、禁用状态。若不设置 `disabled`，则为正常按钮。
 */
import { Button, Space } from '@arvin/react-ui';
import React from 'react';
import './style.scss';

export default () => {
  return (
    <div className="space-align-container">
      <div className="space-align-block">
        <Space align="center">
          center
          <Button type="primary">Primary</Button>
          <span className="mock-block">Block</span>
        </Space>
      </div>
      <div className="space-align-block">
        <Space align="start">
          start
          <Button type="primary">Primary</Button>
          <span className="mock-block">Block</span>
        </Space>
      </div>
      <div className="space-align-block">
        <Space align="end">
          end
          <Button type="primary">Primary</Button>
          <span className="mock-block">Block</span>
        </Space>
      </div>
      <div className="space-align-block">
        <Space align="baseline">
          baseline
          <Button type="primary">Primary</Button>
          <span className="mock-block">Block</span>
        </Space>
      </div>
    </div>
  );
};
