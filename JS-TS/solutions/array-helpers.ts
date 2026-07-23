/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

function validateSource<T>(source: readonly T[] | null | undefined): asserts source is readonly T[] {
  if (source === null || source === undefined) {
    throw new TypeError("source array can't be null or undefined!")
  }
}

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  validateSource(source)

  const result: R[] = [];
  for (let i = 0; i < source.length; i++) {
    result.push(mapper(source[i], i))
  }
  return result
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
  validateSource(source)

  const result: T[] = [];
  for (let i = 0; i < source.length; i++) {
    if (predicate(source[i], i)) {
      result.push(source[i])
    }
  }
  return result;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
  validateSource(source)

  let acc: R = initial
  for (let i = 0; i < source.length; i++) {
    acc = reducer(acc, source[i], i)
  }
  return acc
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  validateSource(source)

  const passed: T[] = []
  const failed: T[] = []

  for(let i = 0; i < source.length; i++) {
    if (predicate(source[i])) {
      passed.push(source[i])
    } else {
      failed.push(source[i])
    }
  }
  return [passed, failed]
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  validateSource(source)

  const result = {} as Record<K, T[]>;

  for (let i = 0; i < source.length; i++) {
    const item = source[i];
    const key = keySelector(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
}
