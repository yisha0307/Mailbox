import React from 'react'

const Sidebar =(mails,handleCategory) => {
	const categorys  = ['inbox','sent','draft','span','trash'];
	return (
		<div className='inbox--sidebar'>
			<h3>Chen Yisha</h3>
			<p>front-end web developer</p>
			<button onClick = {handleCompose}>Compose</button>
			<ul>
				<li category='inbox' onClick ={handleCategory}>INBOX
					<span> {mails.filter(mail => mail.tag === 'inbox'&& mail.read=== false).length}</span>
				</li>
				<li category ='sent' onClick={handleCategory}>SENT</li>
				<li category = 'deleted' onClick={handleCategory}>TRASH</li>
				<li category = 'span' onClick={handleCategory}>SPAN
					<span>{mails.fitler(mail => mail.tag === 'span').length}</span>
				</li>
			</ul>
		</div>)
}

export default Sidebar