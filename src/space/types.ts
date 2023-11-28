import { TAlign, TDirection, TSize } from '../config';
import { ComponentBaseProps } from '../types';

export type TGapSizeUnit = TSize | number | [number, number];

export interface ISpacesProps extends ComponentBaseProps {
  /**
   * @description 按钮类型
   * @default "horizontal"
   */
  direction?: TDirection;

  /**
   * @description 间距大小
   * @default 'middle'
   */
  size?: TGapSizeUnit;

  /**
   * @description 对齐方式
   * @default "start"
   */
  align?: TAlign;

  /**
   * @description 设置拆分
   */
  split?: React.ReactNode;

  /**
   * @description 是否自动换行，仅在 horizontal 时有效
   * @default false
   */
  wrap?: boolean;

  /**
   * 将宽度调整为父元素宽度的选项
   * @default false
   */
  block?: boolean;
}
