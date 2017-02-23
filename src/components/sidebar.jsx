import styles from '../css/sidebar.scss'
import React,{Component} from 'react'

const Sidebar =({unreadcount,trashcount,handleCategory,turncompose}) => {
	return (
		<div className={styles.sidebar}>
			<h3>Chen Yisha</h3>
			<p>front-end web developer</p>
			<button onClick={turncompose}>Compose</button>
			<ul>
				<li onClick ={()=>handleCategory('inbox')}>INBOX
					<span>{unreadcount}</span>
				</li>
				<li onClick={()=>handleCategory('sent')}>SENT</li>
				<li onClick={()=>handleCategory('deleted')}>TRASH
				<span>{trashcount}</span></li>
				<li onClick={()=>handleCategory('span')}>SPAN
				</li>
			</ul>
		</div>)
}

export default Sidebar