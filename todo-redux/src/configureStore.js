import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducer } from './todos/reducers';

// const initialState = {
//   newTodo: 'Achet',
//   todos: [{
//     id: 1,
//     text: 'Acheter du pain',
//     completed: false,
//   }, {
//     id: 2,
//     text: 'Aller au sport',
//     completed: true,
//   }, {
//     id: 3,
//     text: 'Utiliser Redux',
//     completed: false,
//   }],
// };

const rootReducer = combineReducers({
  todos: todosReducer,
});

export function configureStore() {
  const store = createStore(rootReducer/*, initialState*/, composeWithDevTools());

  return store;
}