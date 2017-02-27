//import MAILS from './src/inbox.json';
import {combineReducers} from 'redux'
import MAILS from './src/inbox.json'
//修改成四个:mails/currentSection/selectedEmailID/composeORnot
//1、mails
//数据库里所有的Mails(包括显示的和没显示的)
//先对MAILS进行处理，每个加上一个id
let id = 0
for(const mail of MAILS){
	mail.id = id++;
}
console.log(MAILS);

const mails = (state = MAILS, action) => {
	switch(action.type){
		case 'COMPOSE':
			return [...state, {from: action.from, address: action.address, time:action.time, message: action.message, subject:action.subject, id: id++, tag: action.tag, read:'true'}] 
		case 'MOVE_MAIL':
			//根据id把这封邮件找出来，tag改成'deleted'
			return state.map(mail => {
				if(mail.id !== action.id){return mail;}else{
					return(Object.assign({}, mail, {"tag": action.tag}));
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

const searchText = (state ='', action) => {
	switch(action.type){
		case 'SEARCH_MAIL':
			return action.value;
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
const selectedEmailID = (state = null, action) => {
	switch(action.type){
		case 'OPEN_MAIL':
			return action.id;
		case 'MOVE_MAIL':
			const mails = action.mails
			const selected = mails.find(mail => mail.tag === action.origTag && mail.id > action.id);
			if(!selected){return null}
			return selected.id
		case 'SELECT_TAG':
			return null
		default:
			return state
	}
}

//4、composeORnot
//如果值为true，maillist和maildetail不出现，只出现composepart
//如果值为false, 反过来
const composeORnot = (state = false,action) => {
	switch(action.type){
		case 'TURN_COMPOSE':
			return !state;
		case 'SELECT_TAG':
			return false
		default:
			return state
	}
}
//5、新加一个unread
const showUnread = (state = false, action) => {
	switch(action.type){
		case 'TURN_UNREAD':
			return action.bool;
		default: 
			return state
	}
}
//6、新加一个validateAdd和validateText，看地址是不是符合格式要求, 以及有没有填subject
const validateAdd = (state = null, action) => {
	switch(action.type){
		case 'VALIDATE':
			const regExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
			const flag = regExp.test(action.value)
			return flag
		default:
			return state
	}
}
const validateText = (state = null, action) => {
	switch(action.type){
		case 'VALIDATE_TEXT':
			if(action.value === ''){
				return false
			}
			return true
		default:
			return state
	}
}


const inboxApp = combineReducers({mails,searchText,currentSection,selectedEmailID,composeORnot,showUnread,validateAdd,validateText});
export default inboxApp

