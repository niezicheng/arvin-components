/**
 * title: 禁用
 * description: Radio 不可用。
 */
import { Button, Radio } from '@arvin/react-ui';
import React from 'react';

export default () => {
  const [disabled, setDisabled] = React.useState(false);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <div>
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Button type="primary" onClick={toggle} style={{ marginTop: 8 }}>
        Toggle disabled
      </Button>
    </div>
  );
};
