import React from 'react'
import MailItem from './mailitem'
import styles from '../css/maillist.scss'

const MailList = ({selectedEmailID,showunread, display,mails, currentSection, turnunread, openmail}) => {
	const displayMails = mails.filter(mail=> mail.tag === currentSection);
	return (
		<div className = {styles.maillist} style={{display: display}}>
		<div className={styles.buttons}>
			<button onClick={()=>turnunread(false)} className={showunread?styles.unred:styles.red}>All</button>
			<button onClick={()=>turnunread(true)} className={showunread?styles.red:styles.unred}>Unread</button>
			</div>
		<ul>
			{displayMails.map(mail => <MailItem openmail={openmail} selectedEmailID ={selectedEmailID} mail={mail}/>)}
		</ul>
		</div>);
}

export default MailList