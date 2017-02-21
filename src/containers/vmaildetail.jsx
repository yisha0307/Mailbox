import React from 'react'
import {connect} from 'react-redux'
import MailDetail from '../components/maldetail'

const mapStateToProps = (state) => {
	return {
		selected: state.selected
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleCompose: (text) => dispatch({type: 'COMPOSE',text}),
		deleteemail: (id)=>dispatch({type: 'DELETE_MAIL',id})
	}
}

const VMailDetail = connect(mapStateToProps,mapDispatchToProps)(MailDetail)

export default VMailDetail