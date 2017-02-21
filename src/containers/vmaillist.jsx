import React from 'react'
import MailList from '../components/maillist'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		showmails: state.showmails
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		openmail: ()=>dispatch({type: 'OPEN_MAIL', id: ownProps.index})
	}
}

const VMailList = connect(mapStateToProps,mapDispatchToProps)(MailList)

export default VMailList