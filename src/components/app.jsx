import React,{Component} from 'react'
import Titlebar from './titlebar'
import VSidebar from '../containers/vsidebar'
import VMailList from '../containers/vmaillist'
import VMailDetail from '../containers/vmaildetail'
import VComposePart from '../containers/vcomposepart'
import styles from '../css/main.scss'

class Mailbox extends Component{
	componentDidMount(){
		this.props.fetchData('../inbox.json');
	}
	render(){
		return(
		<div className= {styles.mailbox}>
			<Titlebar />
			<div className = {styles.flexb}>
				<VSidebar />
				<VMailList />
				<VMailDetail />
				<VComposePart />
			</div>
		</div>)
	}
}

export default Mailbox
