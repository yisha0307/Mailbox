import $ from 'jquery'
import React from 'react'
import styles from '../css/composepart.scss'
//如果按了compose，maildetail和maillist这两栏就不出现，变成一个写邮件的地方
const ComposePart = ({display, handleCompose,validateAddress,validateAdd,validateText, validateT}) => {
	let towhom, subject, mailbody
	return(
	<div className ={styles.composepart} style={{display:display}}>
		<h1> New Message</h1>
		<form onSubmit = {(e)=> {
			e.preventDefault();
			const towhomV = towhom.value
			const mailbodyV = mailbody.value
			const subjectV = subject.value
			if(validateAdd && subject.value){
				setTimeout(function(){
					handleCompose(towhomV,mailbodyV,subjectV);
					$('#check').fadeIn(800).fadeOut(300);
				},1500);
			}else{
				return
			}
			towhom.value = ''
			mailbody.value = ''
			subject.value =''
		}}>
		<div className={styles.success} id = 'check'>
			<i className='fa fa-check-circle' />
		</div>
		<div className='compose--to'>
		<div className={styles.to}>To:
		<input type = 'text' ref={(v)=>towhom = v} placeholder = 'address' 
			className={validateAdd || validateAdd === null? '' :styles.wrongFormat}
			onBlur = {()=> validateAddress(towhom.value)}/>
		</div>
		<div className={styles.subject}>Subject:
		<input type ='text' ref={(v) => subject = v} placeholder='subject' 
			className = {validateText || validateText === null? '':styles.wrongFormat}
			onBlur = {() => validateT(subject.value)}/>
		</div>
		</div>
		<textarea type ='textarea' cols='80' rows='7' ref={(v) => mailbody = v}/>
		<input className={styles.send} type='submit' value='SEND'/>
		</form>
	</div>
		);
}

export default ComposePart