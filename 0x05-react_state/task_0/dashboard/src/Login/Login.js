import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
	return (
		<>
			<p>Login to access the full dashboard</p>
			<div className={css(styles.form)}>
				<div>
					<label htmlFor='email'>Email: </label>
					<input name='email' id='email' type='text' />
				</div>
				<div>
					<label className={css(styles.label_btn)} htmlFor='password'>
						Password:{' '}
					</label>
					<input name='password' id='password' type='password' />
				</div>
				<button className={css(styles.label_btn)}>OK</button>
			</div>
		</>
	);
}

const styles = StyleSheet.create({
	form: {
		display: 'flex',
		'@media only screen and (max-width: 900px)': {
			flexDirection: 'column',
		},
	},
	label_btn: {
		marginLeft: '10px',
		'@media (max-width: 900px)': {
			marginLeft: '0px',
		},
		alignSelf: 'flex-start',
	},
});
