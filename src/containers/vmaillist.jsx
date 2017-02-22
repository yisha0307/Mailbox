import React from 'react'
import MailList from '../components/maillist'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		mails: state.mails,
		currentSection: state.currentSection
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openmail: (id)=> {dispatch({type: 'OPEN_MAIL', id})}
	}
}

const VMailList = connect(mapStateToProps,mapDispatchToProps)(MailList)

export default VMailList