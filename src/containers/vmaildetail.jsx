import React from 'react'
import {connect} from 'react-redux'
import MailDetail from '../components/maildetail'
import {postData, putData} from '../actions.fetchData'

const mapStateToProps = (state,ownProps) => {
	return {
		mails: ownProps.mails,
		selectedEmailID: state.selectedEmailID,
		display: state.composeORnot? 'none':'block'
	}
}

const mapDispatchToProps = (dispatch,ownProps) => {
	return {
		handlecompose: (url,address,message,subject) => {dispatch(postData(
			url, address, message, subject))},
		deleteemail: (url,mails,id,origTag)=> {
			dispatch(putData(url,"tag", "deleted"));
			dispatch({
				type: 'MOVE_MAIL',
				mails: ownProps.mails,
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