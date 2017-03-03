import React from 'react'
import Sidebar from '../components/sidebar'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	return {
		currentSection: state.currentSection,
		unreadcount: countunread(ownProps.mails),
		trashcount: counttrash(ownProps.mails),
		sentcount: countsent(ownProps.mails)
	}
}

const mapDispatchToProps = (dispatch,ownProps) =>{
	return {
		turncompose: () => {
			dispatch({type: 'TURN_COMPOSE'})
		},
		handleCategory: (tag) =>{
			dispatch({type: 'SELECT_TAG', tag: tag})
		}
	}
}

const VSidebar = connect(mapStateToProps,mapDispatchToProps)(Sidebar)
export default VSidebar

function countunread(mails){
	const unread = mails.filter(mail => mail.tag === 'inbox' && mail.read === 'false');
	return unread.length;
}
function counttrash(mails){
	const trash = mails.filter(mail => mail.tag === 'deleted');
	return trash.length
}
function countsent(mails){
	const sent = mails.filter(mail => mail.tag === 'sent')
	return sent.length
}