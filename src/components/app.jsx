import React,{Component} from 'react'
import VSidebar from '../containers/vsidebar'
import VMailList from '../containers/vmaillist'
import VMailDetail from '../containers/vmaildetail'
import VComposePart from '../containers/vcomposepart'

class Mailbox extends Component{
	render(){
		return(
		<div className= 'mailbox'>
			<VSidebar />
			<VMailList />
			<VMailDetail />
		</div>)
	}
}

export default Mailbox
