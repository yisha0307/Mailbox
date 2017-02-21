import React,{Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Mailbox from './components/app'

class App extends Component{
	render(){
		<Provider>
			<Mailbox />
		</Provider>
	}
}

render(<App />, document.getElementById('root'));

