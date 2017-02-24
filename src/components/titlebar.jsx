import React from 'react'
import styles from '../css/titlebar.scss'
import img from './profilephoto.jpeg'

const Titlebar = () => (
	<div className = {styles.titlebar}>
		<p><i className = 'fa fa-superpowers' />EsMail</p>
		<span>Yisha{'    '}
		<i className = "fa fa-angle-down"/></span>
		<img className={styles.profileimg} src={img} />
	</div>)

export default Titlebar