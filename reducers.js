//1、mails
//数据库里所有的Mails(包括显示的和没显示的)
//id是最初的mails的id数量
const mails = (state = mails, action) => {
	switch(action.type){
		case 'COMPOSE':
			return [...mails, {text: action.text, id: id+1, tag: action.tag}] //还有一些属性，根据json来
		case 'DELETE_MAIL':
			//根据id把这封email找出来，从队列中删掉
			//id重新排序，不能有空档
		default:
			return state
	}
}

//2、showmails
//显示在mailist里的mails
const showmails = (state = mails.filter((mail)=>mail.tag === 'inbox'), action) => {
	switch(action.type){
		case 'SELECT_TAG':
			return mails.filter((mail) => mail.tag === action.tag);
		default:
			return state
	}
}

//3、selected
//显示在maildetail里的那封邮件
const selected = (state = null, action) => {
	switch(action.type){
		case 'OPEN_MAIL':
			return mails.find((mail) => mail.id === action.id);
		default:
			return state
	}
}

