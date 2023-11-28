/**
 * title: 大小
 * description: 大中小三种组合，可以和表单输入框进行对应配合
 */
import { Radio, Space } from '@arvin/react-ui';
import React from 'react';

export default () => {
  return (
    <Space direction="vertical" size="large">
      <Radio.Group defaultValue="1" size="small">
        <Radio.Button value={'1'}>Beijing</Radio.Button>
        <Radio.Button value={'2'}>Shanghai</Radio.Button>
        <Radio.Button value={'3'}>Hangzhou</Radio.Button>
        <Radio.Button value={'4'}>Jiangxi</Radio.Button>
      </Radio.Group>
      <Radio.Group defaultValue="1" size="middle">
        <Radio.Button value={'1'}>Beijing</Radio.Button>
        <Radio.Button disabled value={'2'}>
          Shanghai
        </Radio.Button>
        <Radio.Button value={'3'}>Hangzhou</Radio.Button>
        <Radio.Button value={'4'}>Jiangxi</Radio.Button>
      </Radio.Group>
      <Radio.Group disabled defaultValue="1" size="large">
        <Radio.Button value={'1'}>Beijing</Radio.Button>
        <Radio.Button value={'2'}>Shanghai</Radio.Button>
        <Radio.Button value={'3'}>Hangzhou</Radio.Button>
        <Radio.Button value={'4'}>Jiangxi</Radio.Button>
      </Radio.Group>
    </Space>
  );
};
