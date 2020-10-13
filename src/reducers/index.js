import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import loading from './loading'
import toast from './toast'
import user from './user';

export default createStore(combineReducers({
	loading,
	toast,
	user
}),applyMiddleware(thunk,promise))
