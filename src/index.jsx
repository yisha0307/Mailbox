import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import VMailbox from './containers/vmailbox'
import {createStore} from 'redux'
import configureStore from './configureStore'

const store = configureStore() //加了一个thunk的middleware

class App extends Component{
	render(){
		return(
		<Provider store={store}>
			<VMailbox />
		</Provider>)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

