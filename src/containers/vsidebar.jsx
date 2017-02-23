import React from 'react'
import Sidebar from '../components/sidebar'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		unreadcount: countunread(state.mails),
		trashcount: counttrash(state.mails)
	}
}

const mapDispatchToProps = (dispatch,ownProps) =>{
	return {
		//缺一个handleCompose
		handleCategory: () =>{
			dispatch({type: 'SELECT_TAG', tag: ownProps.category})
		}
	}
}

const VSidebar = connect(mapStateToProps,mapDispatchToProps)(Sidebar)
export default VSidebar

function countunread(mails){
	const unread = mails.filter(mail => mail.read === false);
	return unread.length;
}
function counttrash(mails){
	const trash = mails.filter(mail => mail.tag === 'deleted');
	return trash.length
}