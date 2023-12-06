/**
 * title: 间距大小
 * description: 使用 size 设置元素之间的间距，预设了 `small`、`middle`、`large` 三种尺寸，也可以自定义间距，若不设置 `size`，则默认为 `middle`
 */
import { Button, Radio, Space } from '@arvin/react-ui';
import React, { useState } from 'react';

export default () => {
  const [size, setSize] = useState<any>('middle');

  return (
    <Space direction="vertical" size={24}>
      <Radio.Group value={size} onChange={(val) => setSize(val)}>
        {['small', 'middle', 'large'].map((size) => (
          <Radio key={size} value={size}>
            {size}
          </Radio>
        ))}
      </Radio.Group>
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </Space>
  );
};
