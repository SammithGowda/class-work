import { ADD_TODO } from "./Action";
export const Reducer = (store, { type, payload }) => {
  //   console.log(store);
  switch (type) {
    case ADD_TODO:
      return { ...store, todo: [...payload] };
    default:
      return store;
  }
};
