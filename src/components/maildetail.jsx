import React from 'react'

const MailDetail = (selected,deleteemial, handleCompose) => {
	return (
		<div className = 'inbox--maildetail'>
			<div className ='detail--title'>
				<p>{selected.from}{selected.address}</p>
				<p>{selected.subject}</p>
				<span>{selected.time.split(' ').join('|')}</span>
				<i className = 'fa fa-trash' onClick = {deleteemial(selected.id)} />
			</div>
			<div className = 'detail--body'>
			{selected.message}
			</div>
			<div className = 'detail--composepart'>
				<form onSubmit = {(e) => {e.preventDeault();handleCompose(this.input);}}
				<input type='text' ref = {(v) => this.input = v} placeholder ='...reply here'/>
				<input type='submit'>SUBMIT</input>
			</div>
		</div>
			);
}