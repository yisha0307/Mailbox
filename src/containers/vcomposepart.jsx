import {connect} from 'react-redux'
import ComposePart from '../components/composepart'
import {postData} from '../actions.fetchData'

const mapStateToProps = (state) => {
	return {
		display: state.composeORnot? 'block':'none',
		validateAdd : state.validateAdd,
		validateText: state.validateText,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleCompose : (url,address,message,subject) => {dispatch(postData(
			url, address, message, subject))},
		validateAddress : (value) => {
			dispatch({
				type:'VALIDATE',
				value: value
			})
		},
		validateT : (text) => {
			dispatch({
				type: 'VALIDATE_TEXT',
				value: text
			})
		}
	}
}

const VComposePart = connect(mapStateToProps, mapDispatchToProps)(ComposePart)

export default VComposePart

