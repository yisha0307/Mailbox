import React,{Component} from 'react'
import VSidebar from '../containers/vsidebar'
import VMailList from '../containers/vmaillist'
import VMailDetail from '../containers/vmaildetail'
import VComposePart from '../containers/vcomposepart'
import styles from '../css/main.scss'

class Mailbox extends Component{
	render(){
		return(
		<div className= {styles.mailbox}>
			<VSidebar />
			<VMailList />
			<VMailDetail />
			<VComposePart />
		</div>)
	}
}

export default Mailbox
