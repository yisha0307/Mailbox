import React from 'react'
import styles from '../css/composepart.scss'
//如果按了compose，maildetail和maillist这两栏就不出现，变成一个写邮件的地方
const ComposePart = ({display, handleCompose}) => {
	let towhom, subject, mailbody;
	return(
	<div className ={styles.composepart} style={{display:display}}>
		<h1> New Message</h1>
		<form onSubmit = {(e)=> {
			e.preventDefault();
			handleCompose(towhom.value,mailbody.value,subject.value);
		}}>
		<div className='compose--to'>
		<p>To</p>
		<input type = 'text' ref={(v)=>towhom = v} placeholder = 'address'/>
		<p>Subject</p>
		<input type ='text' ref={(v) => subject = v} placeholder='subject' />
		</div>
		<input type ='textarea' ref={(v) => mailbody = v}/>
		<input type='submit' value='SEND' />
		</form>
	</div>
		);
}

export default ComposePart