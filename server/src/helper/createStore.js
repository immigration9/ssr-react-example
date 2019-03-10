import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../client/reducers'
/**
 * No provider here, because in this file, the sole purpose is to create a store
 */
export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
}
