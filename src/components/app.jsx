import React,{Component} from 'react'
import VSidebar from '../containers/vsidebar'
import VMailList from '../containers/maillist'
import VMailDetail from '../containers/maildetail'
import ComposePart from './components/composepart'

class Mailbox extends Component{
	render(){
		return(
		<div className= 'mailbox'>
			<VSidebar />
			<VMailList />
			<VMailDetail />
			<ComposePart /> 
		</div>)
	}
}

export default Mailbox
