import { createStore } from 'redux';

const items = ['Позавтракать', 'Сходить в магазин', 'Покормить кота'];

const DEFAULT_STATE = { items, done: {}, text: '' };

// actions
export const addItem = (text) => ({ type: 'ADD_ITEM', text });
export const setText = (text) => ({ type: 'SET_TEXT', text });
export const setDone = (index, done) => ({ type: 'SET_DONE', index, done });

// reducer
// eslint-disable-next-line default-param-last
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        text: '',
        items: [...state.items, action.text],
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_DONE':
      return {
        ...state,
        done: {
          ...state.done,
          [action.index]: action.done,
        },
      };
    default:
      return state;
  }
};

// epics

export function initStore() {
  const store = createStore(rootReducer);

  return store;
}
