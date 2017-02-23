import {connect} from 'react-redux'
import ComposePart from '../components/composepart'

const mapStateToProps = (state) => {
	return {
		display: state.composeORnot? 'block':'none'
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleCompose : (address,message,subject) => {dispatch({
			type: 'COMPOSE',
			from: 'Chen Yisha',
			address:address,
			time: timeFormat(new Date()),
			message:message,
			subject: subject,
			tag:'sent',
			read:true
		})}
	}
}

const VComposePart = connect(mapStateToProps, mapDispatchToProps)(ComposePart)

export default VComposePart

function timeFormat(time){
	const timepart = time.toTimeString().split(' ')[0]
	const datepart = time.toLocaleDateString().split('/').join('-')

	return `${datepart} ${timepart}`
}