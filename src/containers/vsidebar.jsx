import React from 'react'
import Sidebar from '../components/sidebar'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		mails: state.mails
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