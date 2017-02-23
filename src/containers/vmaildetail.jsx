import React from 'react'
import {connect} from 'react-redux'
import MailDetail from '../components/maildetail'

const mapStateToProps = (state) => {
	return {
		mails: state.mails,
		selectedEmailID: state.selectedEmailID,
		display: state.composeORnot? 'none':'block'
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handlecompose: (address,message,subject) => {dispatch({
			type:'COMPOSE',
			from: 'Chen Yisha',
			address:address,
			time: timeFormat(new Date()),
			message:message,
			subject: subject,
			tag:'sent',
			read:true
		})},
		deleteemail: (id)=> {dispatch({type: 'DELETE_MAIL',id})}
	}
}

const VMailDetail = connect(mapStateToProps,mapDispatchToProps)(MailDetail)

export default VMailDetail

function timeFormat(time){
	const timepart = time.toTimeString().split(' ')[0]
	const datepart = time.toLocaleDateString().split('/').join('-')

	return `${datepart} ${timepart}`
}