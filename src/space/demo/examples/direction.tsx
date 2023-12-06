/**
 * title: 间距方向
 * description: 按钮有两种类型：水平间距、垂直间距。默认为水平间距，可以通过 `direction` 属性设置为垂直间距。
 */
import { Button, Radio, Space } from '@arvin/react-ui';
import React from 'react';

type TDirection = 'horizontal' | 'vertical';

export default () => {
  const [direction, setDirection] = React.useState<TDirection>('horizontal');

  return (
    <Space direction="vertical" size={24}>
      <Radio.Group
        value={direction}
        onChange={(val) => setDirection(val as TDirection)}
      >
        {['horizontal', 'vertical'].map((size) => (
          <Radio key={size} value={size}>
            {size}
          </Radio>
        ))}
      </Radio.Group>
      <Space direction={direction}>
        <Button type="primary">Primary</Button>
        <Button type="default">Default</Button>
        <Button type="dashed">Dashed</Button>
      </Space>
    </Space>
  );
};
