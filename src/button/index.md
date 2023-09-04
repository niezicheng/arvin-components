---
category: Components
title: Button
subtitle: 按钮
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BrFMQ5s7AAQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Lp1kTYmSsgoAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 通用
  order: 1
---

## 代码演示

```tsx
/**
 * title: 按钮类型
 * description: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 */
import React from 'react';
import { Button } from '@arvin/react-ui';

export default () => {
  return (
    <>
      <Button type='primary'>Primary</Button>
      <Button>Default</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='text'>Text</Button>
      <Button type='link'>Link</Button>
    </>
  );
};
```

```tsx
/**
 * title: 按钮尺寸
 * description: 按钮有大、中、小三种尺寸。通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
 */
import React from 'react';
import { Button } from '@arvin/react-ui';

export default () => {
  return (
    <>
      <Button size='small'>Small</Button>
      <Button size='middle'>Middle</Button>
      <Button size='large'>Large</Button>
    </>
  );
};
```

```tsx
/**
 * title: 按钮形状
 * description: 按钮圆形、半圆形两种状态。通过设置 `shape` 为 `circle` `round` 分别把按钮设为圆形、半圆形状态。若不设置 `shape`，则为默认按钮。
 */
import React from 'react';
import { Button } from '@arvin/react-ui';

export default () => {
  return (
    <>
      <Button shape='circle'>C</Button>
      <Button shape='round'>Round</Button>
    </>
  );
};
```

```tsx
/**
 * title: 按钮状态
 * description: 按钮有信息、成功、警告、错误四种状态。通过设置 `status` 为 `success` `error` 分别把按钮设为成功、错误状态。若不设置 `status`，则为默认按钮。
 */
import React from 'react';
import { Button } from '@arvin/react-ui';

export default () => {
  return (
    <>
      <Button status='info'>Info</Button>
      <Button status='success'>Success</Button>
      <Button status='warning'>Warning</Button>
      <Button status='error'>Error</Button>
    </>
  );
};
```

<API id="Button"></API>
