import React from 'react'
import MailItem from './mailitem'

const MailList = (mails, currentSection, openmail) => {
	const displayMails = mails.filter(mail=> mail.tag === currentSection);
	return (
		<ul className = 'inbox--maillist'>
			{displayMails.map(mail => <MailItem onClick ={openmail(mail.id)} mail={mail}/>)}
		</ul>);
}

export default MailList