// 类型
export enum EType {
  default = 'default',
  primary = 'primary',
  dashed = 'dashed',
  link = 'link',
  text = 'text',
}
export type TType = keyof typeof EType;

// 尺寸
export enum ESize {
  small = 'small',
  middle = 'middle',
  large = 'large',
}
export type TSize = keyof typeof ESize;

// 形状
export enum EShape {
  default = 'default',
  round = 'round',
  circle = 'circle',
  square = 'square',
}
export type TShape = keyof typeof EShape;

// 状态
export enum EStatus {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}
export type TStatus = keyof typeof EStatus;

// 方向
export enum EDirection {
  vertical = 'vertical',
  horizontal = 'horizontal',
}
export type TDirection = keyof typeof EDirection;

// 对其方式
export enum EAlign {
  start = 'start',
  end = 'end',
  center = 'center',
  baseline = 'baseline',
}
export type TAlign = keyof typeof EAlign;
