import styles from '../css/sidebar.scss'
import React,{Component} from 'react'

const Sidebar =({currentSection, unreadcount,trashcount,sentcount,handleCategory,turncompose}) => {
	return (
		<div className={styles.sidebar}>			
			<button onClick={turncompose}>
			<i className="fa fa-pencil-square-o"/>Compose</button>
			<ul>
				<li onClick ={()=>handleCategory('inbox')} className={currentSection==='inbox'? styles.currentSection :styles.notcurrentSection}>
					<i className = 'fa fa-envelope-open-o' />
					<span>INBOX</span><span className={styles.count}>{unreadcount}</span>
				</li>
				<li onClick={()=>handleCategory('sent')} className={currentSection==='sent'? styles.currentSection :styles.notcurrentSection}>
					<i className = 'fa fa-paper-plane-o' />
				<span>SENT</span><span className={styles.count}>{sentcount}</span></li>
				<li onClick={()=>handleCategory('deleted')} className={currentSection==='deleted'? styles.currentSection :styles.notcurrentSection}>	
					<i className='fa fa-trash-o' />
				<span>TRASH</span><span className={styles.count}>{trashcount}</span></li>
				<li onClick={()=>handleCategory('span')} className={currentSection==='span'? styles.currentSection :styles.notcurrentSection}>
					<i className='fa fa-dot-circle-o' />
					<span>SPAN</span>
				</li>
			</ul>
		</div>)
}

export default Sidebar