import $ from 'jquery'
import React from 'react'
import styles from '../css/maildetail.scss'

const MailDetail = ({mails, selectedEmailID, display, deleteemail,handlecompose}) => {
	if(selectedEmailID === null){return <div className={styles.nothing} style={{display:display}}/>}
	const selected = mails[selectedEmailID];
	const deleteable = selected.tag === 'deleted'? 'none':'inline-block'
	let subject, message,address;
	return (
		<div className = {styles.maildetail} style={{display:display}}>
			<div className ={styles.title}>
				<p className={styles.from} style={{display: selected.tag==='sent'? 'none':'inline-block'}}>FROM: {selected.from}</p>
				<p className={styles.address}>{selected.address}</p>
				<p className={styles.subject}>{selected.subject}</p>
				<span>{selected.time.split(' ').join('|')}</span>
				<i className = 'fa fa-trash' style={{display: deleteable}} title='delete' 
					onClick = {()=>deleteemail(
							mails,selectedEmailID,selected.tag
						)} />
			</div>
			<div className={styles.background}>
			<div className = {styles.body}>
			{selected.message}
			</div>
			<div className = {styles.reply}>
				<form onSubmit = {(e) => {e.preventDefault();
					if(!message.value.trim()){return;}
					const subject = 'reply:'+ selected.subject;
					setTimeout(function(){
						handlecompose(selected.address, message.value, subject);
						$('#check').fadeIn(800).fadeOut(300);
					},1500)
					message.value ='';
				}}>
				<br/>
				<div className={styles.success} id = 'check'>
					<i className='fa fa-check-circle' />
				</div>
				<textarea cols='75' rows='5'  ref={v => message = v} />
				<input className ={styles.send} type ='submit' value='SEND'/>
				</form>
			</div>
			</div>
		</div>
			);
}

export default MailDetail