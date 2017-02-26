import React from 'react'
import styles from '../css/mailitem.scss'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getprettytime = (time)=>{
	const mon_num = time.split('-')[1];
	const mon = MONTHS[mon_num-1];
	const day_num = time.split(' ')[0].split('-')[2];
	const day = day_num ;
	return `${day} ${mon}`;
}

const addFormat = (address) => {
	const len = address.length;
	if(len < 20){return address}else{
		return address.slice(0,20)+'...'
	}
}

const MailItem = ({selectedEmailID,mail, openmail}) => {
	const display=mail.read==='false'? 'inline-block':'none'
	return(
		<li className ={selectedEmailID === mail.id? styles.selected: styles.mailitem} onClick = {()=>openmail(mail.id)}>
		<h5>{mail.tag==='sent'? addFormat(mail.address): addFormat(mail.from)}</h5>
		<div className={styles.circle} style={{display: display}}/>
		<span>{getprettytime(mail.time)}</span>
		<p>{mail.subject}</p>
		</li>);
}

export default MailItem