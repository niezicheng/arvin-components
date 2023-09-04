import { TType, TSize, TShape, TStatus } from '../config'

export interface IButtonProps {
  /**
   * @description 按钮类型
   * @default "default"
   */
  type?: TType
  /**
   * @description 按钮形状
   * @default "default"
   */
  shape?: Exclude<TShape, 'square'>
  /**
   * @description 按钮大小
   * @default 'middle'
   */
  size?: TSize
  /**
   * @description 按钮状态
   * @default 'default'
   */
  status?: TStatus
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
   * @description 按钮的图标
   */
  icon?: React.ReactNode;
  /**
   * @description 孩子节点
   * @default null
   */
  children?: React.ReactNode;
}
