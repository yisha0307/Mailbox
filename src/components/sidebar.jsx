import React,{Component} from 'react'

const Sidebar =({unreadcount,trashcount,handleCategory}) => {
	return (
		<div className='inbox--sidebar'>
			<h3>Chen Yisha</h3>
			<p>front-end web developer</p>
			<button >Compose</button>
			<ul>
				<li category='inbox' onClick ={handleCategory}>INBOX
					<span>{unreadcount}</span>
				</li>
				<li category ='sent' onClick={handleCategory}>SENT</li>
				<li category = 'deleted' onClick={handleCategory}>TRASH
				<span>{trashcount}</span></li>
				<li category = 'span' onClick={handleCategory}>SPAN
				</li>
			</ul>
		</div>)
}

export default Sidebar