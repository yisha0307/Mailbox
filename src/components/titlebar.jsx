import React from 'react'
import styles from '../css/titlebar.scss'
import img from './profilephoto.jpeg'
import VSearchBar from '../containers/vsearchbar.jsx'

const Titlebar = () => (
	<div className = {styles.titlebar}>
		<p><i className = 'fa fa-superpowers' />EsMail</p>
		<VSearchBar />
		<span>Yisha{'    '}
		<i className = "fa fa-angle-down"/></span>
		<img className={styles.profileimg} src={img} />
	</div>)

export default Titlebar