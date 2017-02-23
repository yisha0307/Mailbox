import React from 'react'
import {connect} from 'react-redux'
import MailDetail from '../components/maildetail'

const mapStateToProps = (state) => {
	return {
		mails: state.mails,
		selectedEmailID: state.selectedEmailID
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		//还需要一个handleCompose
		deleteemail: (id)=> {dispatch({type: 'DELETE_MAIL',id})}
	}
}

const VMailDetail = connect(mapStateToProps,mapDispatchToProps)(MailDetail)

export default VMailDetail