import { TShape, TSize, TStatus, TType } from '../config';
import { ComponentBaseProps } from '../types';

export interface IButtonProps extends ComponentBaseProps {
  /**
   * @description 按钮类型
   * @default "default"
   */

  type?: TType;
  /**
   * @description 按钮形状
   * @default "default"
   */

  shape?: Exclude<TShape, 'square'>;
  /**
   * @description 按钮大小
   * @default 'middle'
   */
  size?: TSize;

  /**
   * @description 按钮状态
   * @default 'default'
   */
  status?: TStatus;

  /**
   * @description 按钮载入状态
   * @default false
   */
  loading?: boolean;

  /**
   * @description 按钮禁用状态
   * @default false
   */
  disabled?: boolean;

  /**
   * @description 幽灵属性，使按钮背景透明
   * @default false
   */
  ghost?: boolean;

  /**
   * @description 按钮的图标
   */
  icon?: React.ReactNode;

  /**
   * @description 点击事件
   * @default function
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
