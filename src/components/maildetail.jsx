import React from 'react'

const MailDetail = ({mails, selectedEmailID, deleteemail}) => {
	const selected = mails[selectedEmailID];
	return (
		<div className = 'inbox--maildetail'>
			<div className ='detail--title'>
				<pre>{selected.from}
				{selected.address}</pre>
				<p>{selected.subject}</p>
				<span>{selected.time.split(' ').join('|')}</span>
				<i className = 'fa fa-trash' onClick = {deleteemail(selectedEmailID)} />
			</div>
			<div className = 'detail--body'>
			{selected.message}
			</div>
			<div className = 'detail--composepart'>
				<form onSubmit = {(e) => {e.preventDeault();//少一个compose
				}}>
				<input type='text' ref = {(v) => this.input = v} placeholder ='...reply here'/>
				<input type='submit' value='Send'/>
				</form>
			</div>
		</div>
			);
}

export default MailDetail