import React from 'react'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getprettytime = (time)=>{
	const mon_num = time.split('-')[1];
	const mon = MONTHS[mon_num-1];
	const day_num = time.split(' ')[0].split('-')[2];
	const day = day_num +'th';
	return `${day} ${mon}`;
}

const MailItem = (mail, onClick) => (
	<li className ='inbox--mailitem' onClick = {onClick}>
	<h5>{mail.from}</h5>
	<span>{getprettytime(mail.time)}</span>
	<p>{mail.subject}</p>
	</li>);

export default MailItem