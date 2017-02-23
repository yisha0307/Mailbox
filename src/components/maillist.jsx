import React from 'react'
import MailItem from './mailitem'
import styles from '../css/maillist.scss'

const MailList = ({display,mails, currentSection, turnunread, openmail}) => {
	const displayMails = mails.filter(mail=> mail.tag === currentSection);
	return (
		<div className = {styles.maillist}>
		<button onClick={()=>turnunread(false)}>All</button>
		<button onClick={()=>turnunread(true)}>Unread</button>
		<ul style={{display: display}}>
			{displayMails.map(mail => <MailItem openmail={openmail} mail={mail}/>)}
		</ul>
		</div>);
}

export default MailList