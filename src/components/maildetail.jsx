import React from 'react'

const MailDetail = ({mails, selectedEmailID, display, deleteemail,handlecompose}) => {
	const selected = mails[selectedEmailID];
	let subject, message,address;
	return (
		<div className = 'inbox--maildetail' style={{display:display}}>
			<div className ='detail--title'>
				<pre>{selected.from}
				{selected.address}</pre>
				<p>{selected.subject}</p>
				<span>{selected.time.split(' ').join('|')}</span>
				<i className = 'fa fa-trash' onClick = {()=>deleteemail(selectedEmailID,selected.tag)} />
			</div>
			<div className = 'detail--body'>
			{selected.message}
			</div>
			<div className = 'detail--composepart'>
				<form onSubmit = {(e) => {e.preventDefault();
					if(!subject.value.trim() || !address.value.trim()){return;}
					handlecompose(address.value, message.value, subject.value);
					subject.value ='';
					message.value ='';
				}}>
				<input type='text' ref = {v => address = v} value ={selected.address}/>
				<input type='text' ref = {v => subject = v} placeholder="subject" />
				<br/>
				<textarea ref={v => message = v} />
				<input type ='submit' value='SEND'/>
				</form>
			</div>
		</div>
			);
}

export default MailDetail