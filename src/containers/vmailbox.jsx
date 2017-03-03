import {connect} from 'react-redux'
import Mailbox from '../components/app'
import {fetchData} from '../actions/fetchData'

const mapStateToProps = (state) => {
	return {
		mails: state.mails
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => {dispatch(fetchData(url))}
	}
}

const VMailbox = connect(mapStateToProps,mapDispatchToProps)(Mailbox)

export default VMailbox