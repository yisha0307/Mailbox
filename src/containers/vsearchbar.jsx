import React from 'react'
import SearchBar from '../components/searchbar'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		searchText: state.searchText
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		searchMails : (value) => {
			dispatch({type: 'SEARCH_MAIL', value: value})
		}
	}
}

const VSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar)
export default VSearchBar