import React,{Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import img from './img.jpeg'


class App extends Component{
	render(){
		return (<div>
		<h1>Hello, world</h1> 
		<i className ='fa fa-check' />
		<img src = {img} />
		<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Lily_Collins_WonderCon_2013.jpg/220px-Lily_Collins_WonderCon_2013.jpg" />
		</div>
		)
	}
}

render(<App />, document.getElementById('root'));

