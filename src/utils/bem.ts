import { isArray, isObject, isString } from 'lodash-es';

type TBemModifier = string | string[] | { [propName: string]: boolean };

/**
 * 创建 modifier 类名
 * @param modifier
 * @param prefixClass
 * @returns string
 */
const createModifierClass = (modifier: TBemModifier, prefixClass?: string) => {
  if (isString(modifier)) {
    return ` ${prefixClass}--${modifier}`;
  }
  if (isArray(modifier)) {
    // modifier 去重
    return [...new Set(modifier)]
      .map((item) => ` ${prefixClass}--${item}`)
      .join('');
  }
  if (isObject(modifier)) {
    return Object.keys(modifier)
      .filter((key) => modifier[key])
      .map((key) => ` ${prefixClass}--${key}`)
      .join('');
  }
  return '';
};

/**
 * CSS BEM
 * @example
 * const bem = createCssScope('button')() // button
 * bem('primary') // button button--primary
 * bem(['primary', 'middle']) // button button--primary button--middle
 * bem(['primary', 'middle'], { disabled: true }) // button button--primary button--middle button--disabled
 *
 * const bem = createCssScope('button', 'icon') //  button button__icon
 * const bem = createCssScope('button', ['icon', 'label']) //  button button__icon button__label
 */

export const createCssScope = (
  block: string,
  element?: string | string[],
  identity = 'ar',
) => {
  const elementPrefix = isArray(element)
    ? element.map((item) => (item ? `__${item}` : '')).join(' ')
    : isString(element)
    ? `__${element}`
    : '';
  const prefixClass = `${identity}-${block.replace(
    identity,
    '',
  )}${elementPrefix}`;

  return (modifier?: TBemModifier, modifierLater?: TBemModifier) => {
    const modifierClass = modifier
      ? createModifierClass(modifier, prefixClass)
      : '';
    // console.log('%c👉  modifierClass: ', 'background:#41b883;padding:1px; border-radius: 0 3px 3px 0;color: #fff', modifierClass) // 👈
    const modifierLaterClass = modifierLater
      ? createModifierClass(modifierLater, prefixClass)
      : '';
    return `${prefixClass}${modifierClass}${modifierLaterClass}`.trim();
  };
};
