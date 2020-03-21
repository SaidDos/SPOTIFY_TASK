import {getUniqueArrayIDs} from './functions/getUniqueArrayIDs';
import {getSortedArray} from './functions/getSortedArray';
import {findObjectInArray} from './functions/findObjectInArray';

// testing functions
describe('utils', () => {
  const duplicateArray = [{id: 1, name: 'said'}, {id: 1, name: 'dos'}];
  const unSortedArray = [
    {id: 1, name: 'said'},
    {id: 2, name: 'dos'},
    {id: 3, name: 'Ahmed'},
  ];

  // testing getUniqueArray()
  it('should return [1]  when array is [{id: 1, name: "said"}, {id: 1, name: "dos"}]', () => {
    expect(getUniqueArrayIDs(duplicateArray)).toStrictEqual([1]);
  });

  // testing getSortedArray()
  it('should return sorted names array when array is unSorted', () => {
    expect(getSortedArray(unSortedArray)).toStrictEqual([
      {id: 3, name: 'Ahmed'},
      {id: 2, name: 'dos'},
      {id: 1, name: 'said'},
    ]);
  });

  // testing findObhectInArray()
  it('should return {id: 1, name: "said"}  when array is [{id: 1, name: "said"}, {id: 2, name: "dos"}] and id = 1', () => {
    expect(findObjectInArray(unSortedArray, 1)).toStrictEqual({
      id: 1,
      name: 'said',
    });
  });
});
