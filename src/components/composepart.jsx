import React from 'react'

//如果按了compose，maildetail和maillist这两栏就不出现，变成一个写邮件的地方
const ComposePart = (handleCompose) => (
	<div className ='inbox--compose'>
		<h1> New Message</h1>
		<form onSubmit = {(e)=> {
			e.preventDefault();
			handleCompose(this.towhom,this.subject,this.mailbody, 'sent', );
		}}>
		<div className='compose--to'>
		<p>To</p>
		<input type = 'text' ref={(v)=>this.towhom = v}/>
		</div>
		<div className ='compose--subject'>
		<p>Subject</p>
		<input type='text' ref={(v) => this.subject =v} />
		</div>
		<input type ='textarea' ref={(v) => this.mailbody = v}/>
		<input type='submit' value='SEND' />
		</form>
	</div>
		)

export default ComposePart