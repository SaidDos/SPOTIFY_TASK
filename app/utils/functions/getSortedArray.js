// this is a function takes 1 arg and retrun sorted array by names

export const getSortedArray = array => {
  return array.sort((a, b) =>
    a.name > b.name ? 1 : a.name === b.name ? 0 : -1,
  );
};
