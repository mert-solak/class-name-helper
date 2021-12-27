/**
 * merges class names
 * @param classNames @type string[]
 * @returns string
 */
export const mergeClassNames = (...classNames: (string | undefined)[]): string => classNames.join(' ');

/**
 * merges class names with condition
 * @param shouldMerge @type boolean
 * @param defaultMergeNumber @type number
 * @param classNames @type string
 * @returns string
 */
export const shouldMergeClassNames = (
  shouldMerge: boolean,
  defaultMergeNumber: number,
  ...classNames: string[]
) =>
  shouldMerge
    ? classNames.join(' ')
    : classNames.filter((...params) => params[1] <= defaultMergeNumber - 1).join(' ');