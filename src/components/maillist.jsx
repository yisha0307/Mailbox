import React from 'react'
import MailItem from './components/mailitem'

const MailList = (showmails, openmail) => {
	return (
		<ul className = 'inbox--maillist'>
		{showmails.map((showmail,index) => {
			return <MailItem {...showmail} index = {index} openmail={openmail}/>
		})}
		</ul>);
}

export default MailList