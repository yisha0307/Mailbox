import React from 'react'

const MailItem = (from, time, subject, openmail) => (
	<li className ='inbox--mailitem' onClick = {openmail}>
	<h5>{from}</h5>
	<span>{getprettytime(time)}</span>
	<p>{subject}</p>
	</li>);

export default MailItem