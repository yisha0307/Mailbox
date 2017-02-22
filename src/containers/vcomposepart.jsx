import {connect} from 'react-redux'
import ComposePart from '../components/composepart'

const mapStateToProps = (state) => {
	return {
		mails: state.mails
	}
}

