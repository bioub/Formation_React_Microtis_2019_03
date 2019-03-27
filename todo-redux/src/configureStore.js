import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';

// const initialState = {
//  users: {
//    loading: true,
//    items: [],
//  }
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
  users: usersReducer,
});

export function configureStore() {
  const store = createStore(rootReducer/*, initialState*/, composeWithDevTools());

  return store;
}