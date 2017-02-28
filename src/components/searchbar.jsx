import React from 'react'
import styles from '../css/searchbar.scss'

const SearchBar = ({searchText, searchMails}) => {
	let searchT
	return (
		<div className={styles.searchbar}>
			<input type= 'text' ref = {input =>searchT = input} 
			onKeyUp = {(e) => 
					{if(e.keyCode === 13){
						searchMails(searchT.value)
					}}} 
			onChange = {function(){
				if(searchT.value === ''){
					searchMails('')
				}
			}} placeholder='Search mails...'/>
			<button className={styles.searchBtn} 
				onClick = {() => searchMails(searchT.value)}>
				<i className = 'fa fa-search' />
			</button>
		</div>
		)
}

export default SearchBar