//import MAILS from './src/inbox.json';
import {combineReducers} from 'redux'
import MAILS from './src/inbox.json'
//修改成三个:mails/currentSection/selectedEmailID
//1、mails
//数据库里所有的Mails(包括显示的和没显示的)
//先对MAILS进行处理，每个加上一个id
let id = 0
for(const mail of MAILS){
	mail.id = id++;
}

const mails = (state = MAILS, action) => {
	switch(action.type){
		// case 'COMPOSE':
		// 	return [...state, {from: action.from, address: action.address, time:action.time, message: action.message, subject:action.subject, id: id++, tag: action.tag, read:'true'}] 
		case 'DELETE_MAIL':
			//根据id把这封邮件找出来，tag改成'deleted'
			return state.map(mail => {
				if(mail.id !== action.id){return mail;}else{
					return(Object.assign({}, mail, {"tag": "deleted"}));
				}
			})
		case 'OPEN_MAIL':
			return state.map(mail => {
				if(mail.id !== action.id){return mail;}else{
					return(Object.assign({},mail,{"read":"true"}));
				}
			})
		default:
			return state
	}
}

//2、currentSection
//显示在mailist里的mails
const currentSection = (state = 'inbox', action) => {
	switch(action.type){
		case 'SELECT_TAG':
			return action.tag;
		default:
			return state
	}
}

//3、selected
//显示在maildetail里的那封邮件
const selectedEmailID = (state = 0, action) => {
	switch(action.type){
		case 'OPEN_MAIL':
			return action.id;
		case 'DELETE_MAIL':
			return state
		default:
			return state
	}
}

const inboxApp = combineReducers({mails,currentSection,selectedEmailID});
export default inboxApp
