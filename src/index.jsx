import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Mailbox from './components/app'
import {createStore} from 'redux'
import inboxApp from '../reducers.js'

const store = createStore(inboxApp)
class App extends Component{
	render(){
		<Provider store={store}>
			<Mailbox />
		</Provider>
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

