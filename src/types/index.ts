export interface ComponentBaseProps {
  /**
   * @description 孩子节点
   * @default null
   */
  children?: React.ReactNode;

  /**
   * @description 样式
   * @default {}
   */
  style?: React.CSSProperties;

  /**
   * @description 类名
   * @default ''
   */
  className?: string;
}

export type TOption = {
  label: React.ReactNode | number | string;
  value: string;
  disabled?: boolean;
};
export type TOptions = Array<TOption>;
