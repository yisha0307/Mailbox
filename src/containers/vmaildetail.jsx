import React from 'react'
import {connect} from 'react-redux'
import MailDetail from '../components/maildetail'
import {postData, putData} from '../actions.fetchData'

const mapStateToProps = (state) => {
	return {
		mails: state.mails,
		selectedEmailID: state.selectedEmailID,
		display: state.composeORnot? 'none':'block'
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handlecompose: (url,address,message,subject) => {dispatch(postData(
			url, address, message, subject))},
		deleteemail: (url,mails,id,origTag)=> {
			dispatch(putData(url,"tag", "deleted"));
			dispatch({
				type: 'MOVE_MAIL',
				mails: state.mails,
				origTag: origTag
			})
		}
	}
}

const VMailDetail = connect(mapStateToProps,mapDispatchToProps)(MailDetail)

export default VMailDetail

function timeFormat(time){
	const timepart = time.toTimeString().split(' ')[0]
	const datepart = time.toLocaleDateString().split('/').join('-')

	return `${datepart} ${timepart}`
}