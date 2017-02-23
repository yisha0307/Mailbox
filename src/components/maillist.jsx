import React from 'react'
import MailItem from './mailitem'
import styles from '../css/maillist.scss'

const MailList = ({display,mails, currentSection, openmail}) => {
	const displayMails = mails.filter(mail=> mail.tag === currentSection);
	return (
		<ul className = {styles.maillist} style={{display: display}}>
			{displayMails.map(mail => <MailItem  mail={mail}/>)}
		</ul>);
}

export default MailList