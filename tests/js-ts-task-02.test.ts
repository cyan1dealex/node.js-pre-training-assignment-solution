import {
  mapArray,
  filterArray,
  reduceArray,
  partition,
  groupBy,
} from '../JS-TS/solutions/array-helpers';

const nums = [1, 2, 3, 4];

describe('Task 02: Array Helpers', () => {
  it('mapArray should map values correctly', () => {
    const doubled = mapArray(nums, (n) => n * 2);
    expect(doubled).toEqual([2, 4, 6, 8]);
  });

  it('filterArray should filter values correctly', () => {
    const evens = filterArray(nums, (n) => n % 2 === 0);
    expect(evens).toEqual([2, 4]);
  });

  it('reduceArray should reduce values correctly', () => {
    const sum = reduceArray(nums, (acc, n) => acc + n, 0);
    expect(sum).toBe(10);
  });

  it('partition should split based on predicate', () => {
    const [pass, fail] = partition(nums, (n) => n % 2 === 0);
    expect(pass).toEqual([2, 4]);
    expect(fail).toEqual([1, 3]);
  });

  it('groupBy should group items by key', () => {
    const data = [
      { id: 1, tag: 'a' },
      { id: 2, tag: 'b' },
      { id: 3, tag: 'a' },
    ];
    const grouped = groupBy(data, (d) => d.tag);
    expect(grouped.a.length).toBe(2);
    expect(grouped.b.length).toBe(1);
  });
});
