/**
 * title: 按钮类型
 * description: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 */
import { Button, Space } from '@arvin/react-ui';
import React from 'react';

export default () => {
  const directionArr = ['horizontal', 'vertical'];
  const [direction, setDirection] = React.useState<'horizontal' | 'vertical'>(
    'horizontal',
  );

  return (
    <Space direction="vertical">
      <Space block size="large">
        {directionArr.map((value) => (
          <div key={value} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              name="direction"
              value={value}
              checked={direction === value}
              onChange={(e) =>
                setDirection(e.target.value as 'horizontal' | 'vertical')
              }
              style={{ margin: 0, marginRight: 4 }}
            />
            <span>{value === 'horizontal' ? '水平' : '垂直'}</span>
          </div>
        ))}
      </Space>
      <Space block direction={direction}>
        <Button type="primary">Primary</Button>
        <Button type="default">Default</Button>
        <Button type="dashed">Dashed</Button>
      </Space>
    </Space>
  );
};
