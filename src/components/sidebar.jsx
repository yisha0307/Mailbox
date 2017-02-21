import React from 'react'

const Sidebar =(mails,handleCompose,handleCategory) => {
	const categorys  = ['inbox','sent','draft','span','trash'];
	return (
		<div className='inbox--sidebar'>
			<h3>Chen Yisha</h3>
			<p>front-end web developer</p>
			<button onClick = {handleCompose}>Compose</button>
			<ul>
				{categorys.map((category) => <li category={category} onClick={()=>handleCategory()}>
					{category}
					<span>{mails.filter((mail) => mail.tag === {category}).length}</span>
					</li>)}
			</ul>
		</div>
}

export default Sidebar