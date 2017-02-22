//import MAILS from './src/inbox.json';
import {combineReducers} from 'redux'


const MAILS= [
	{
		"from": "Maxime Preaux",
		"address": "maxime@codepen.io",
		"time": "2016-10-07 15:35:14",
		"message": "This is my first attempt at using React.\nDuis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras",
		"subject": "Messing with React.js",
		"tag": "inbox",
		"read": "false"
	},
	{
		"from": "Dribbble",
		"address": "digest@dribbble.com",
		"time": "2016-05-09 14:23:54",
		"message": "Here are the latest shots from Dribbblers you follow! Nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,",
		"subject": "Dribbble Digest",
		"tag": "inbox",
		"read": "false"
	}
]
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
				if(mail.id !== ation.id){return mail;}else{
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
const selectedEmailID = (state = null, action) => {
	switch(action.type){
		case 'OPEN_MAIL':
			return action.id;
		case 'DELETE_MAIL':
			for(const mail of MAILS){
				if(mail.tag === MAILS[action.id].tag){
					return mail.id
				}
			}
		default:
			return state
	}
}

const inboxApp = combineReducers({mails,currentSection,selectedEmailID});
export default inboxApp

