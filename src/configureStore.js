import {createStore, applyMiddleware} from 'redux'
import thunk from 'thunk'
import inboxApp from './reducers'

export default function configureStore(initialState){
	return createStore(
		inboxApp,
		initialState,
		applyMiddleware(thunk)
		);
}
