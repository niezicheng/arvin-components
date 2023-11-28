import React from 'react';
import { ComponentBaseProps, TOptions } from '../types';
import Radio from './Radio';
import RadioButton from './RadioButton';

export type TRadioGroupChildren = React.ReactElement<
  typeof Radio | typeof RadioButton
>;

export interface IRadioProps extends ComponentBaseProps {
  /**
   * @description 根据 value 进行比较，判断是否选中
   */
  value?: string;

  /**
   * @description 当前是否选中
   */
  checked?: boolean;

  /**
   * @description 初始是否选中
   * @default 'false'
   */
  defaultChecked?: boolean;

  /**
   * @description 是否禁用
   * @default "false"
   */
  disabled?: boolean;

  /**
   * @description input[type="radio"] 的 name 属性
   */
  name?: string;

  /**
   * @description 选中时的回调函数
   */
  onChange?: (value: string) => void;
}

export interface IRadioButtonProps extends IRadioProps {
  /**
   * @description 按钮类型
   * @default 'outline'
   */
  buttonType?: 'outline' | 'solid';

  /**
   * @description 按钮大小
   * @default 'middle'
   */
  size?: 'small' | 'middle' | 'large';
}

export interface IRadioGroupProps extends IRadioButtonProps {
  /**
   * @description 以配置形式设置子元素
   */
  options?: number[] | string[] | TOptions;

  /**
   * @description 选项类型
   * @default 'default'
   */
  optionType?: 'button' | 'default';

  /**
   * @description 默认选中的值
   * @default ''
   */
  defaultValue?: string;

  /**
   * @description 孩子节点，优先级低于 options
   */
  children?: Array<TRadioGroupChildren>;
}
