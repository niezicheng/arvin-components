/**
 * title: 幽灵按钮
 * description: 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
 */
import { Button } from '@arvin/react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ background: 'rgb(190, 200, 200)', padding: '16px 16px' }}>
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
    </div>
  );
};
