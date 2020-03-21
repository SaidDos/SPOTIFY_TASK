// this is a function takes 2 args and retrun object in array that matches Id

export const findObjectInArray = (array, id) => {
  return array.find(item => item.id === id);
};
