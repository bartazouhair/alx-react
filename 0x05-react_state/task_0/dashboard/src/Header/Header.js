import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
	return (
		<div className={css(styles.header)}>
			<img className={css(styles.logo)} src={logo} alt='Holberton logo' />
			<h1 className={css(styles.heading)}>School dashboard</h1>
		</div>
	);
}

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		width: '300px',
		height: '300px',
	},
	heading: {
		color: '#e0354b',
	},
});
