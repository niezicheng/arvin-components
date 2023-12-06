import { isArray, isNumber, isString } from 'lodash-es';
import React, { useCallback } from 'react';
import { TAlign } from '../config';
import { ISpacesProps, TGapSizeUnit } from './types';

export const getAlign = (align: TAlign): React.CSSProperties['alignItems'] => {
  switch (align) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'baseline':
      return 'baseline';
    default:
      return 'center';
  }
};

const Space: React.FC<ISpacesProps> = ({
  size = 'middle',
  direction = 'horizontal',
  align = 'start',
  wrap = false,
  // block = false,
  split,
  children,
  className,
  style,
}) => {
  const getGapSize = useCallback(
    (size: TGapSizeUnit): number => {
      switch (size) {
        case 'small':
          return 4;
        case 'middle':
          return 8;
        case 'large':
          return 16;
        default:
          return 4;
      }
    },
    [size],
  );

  const resolveGapSize = useCallback((): React.CSSProperties => {
    if (isArray(size)) {
      return {
        rowGap: size[1],
        columnGap: size[0],
      };
    }
    if (isNumber(size)) {
      return { gap: size };
    }
    if (isString(size)) {
      return { gap: getGapSize(size) };
    }
    return { gap: 4 };
  }, [getGapSize]);

  const _style: React.CSSProperties = {
    ...style,
    // display: block ? 'flex' : 'inline-flex',
    display: 'flex',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    alignItems: getAlign(align),
    ...resolveGapSize(),
  };

  return (
    <div className={className} style={_style}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child}
            {index !== (children as any).length - 1 && split}
          </>
        );
      })}
    </div>
  );
};

export default Space;
