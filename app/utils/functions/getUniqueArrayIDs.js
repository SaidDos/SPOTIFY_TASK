// this is a function takes 1 arg and retrun array with unique IDs

export const getUniqueArrayIDs = array => {
  return [...new Set(array.map(item => item.id))];
};
