import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite/no-important';

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.closeHandler = this.closeHandler.bind(this);
		this.markAsRead = this.markAsRead.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		if (
			nextProps.listNotifications.length > this.props.listNotifications.length ||
			this.props.displayDrawer != nextProps.displayDrawer
		) {
			return true;
		}
		return false;
	}

	closeHandler() {
		console.log('Close button has been clicked');
		this.props.handleHideDrawer();
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	render() {
		return (
			<>
				{!this.props.displayDrawer ? (
					<div
						className={['menuItem', css(styles.menuItem)].join(' ')}
						onClick={this.props.handleDisplayDrawer}
					>
						Your notifications
					</div>
				) : (
					<div className={['Notifications', css(styles.notifications)].join(' ')}>
						<button
							className={css(styles.btn)}
							aria-label='Close'
							onClick={this.closeHandler}
							style={{ float: 'right' }}
						>
							<img className={css(styles.closeIcon)} src={closeIcon} alt='Close notifications' />
						</button>

						{this.props.listNotifications.length ? (
							<>
								<p className={css(styles.p)}>Here is the list of notifications</p>
								<ul className={css(styles.ul)}>
									{this.props.listNotifications.map((notif) => (
										<NotificationItem
											key={notif.id}
											id={notif.id}
											type={notif.type}
											html={notif.html}
											value={notif.value}
											markAsRead={this.markAsRead}
										/>
									))}
								</ul>
							</>
						) : (
							<p>No new notification for now</p>
						)}
					</div>
				)}
			</>
		);
	}
}

const opcityKeyFrames = {
	'0%': {
		opacity: 0.5,
	},
	'100%': {
		opacity: 1,
	},
};
const trasnlateYKeyFrames = {
	'0%': {
		transform: 'translateY(0)',
	},
	'50%': {
		transform: 'translateY(-5px)',
	},
	'100%': {
		transform: 'translateY(5px)',
	},
};

const styles = StyleSheet.create({
	menuItem: {
		float: 'right',
		backgroundColor: '#fff8f8',
		':hover': {
			cursor: 'pointer',
			animationName: [opcityKeyFrames, trasnlateYKeyFrames],
			animationDuration: '0.5s',
			animationIterationCount: 3,
		},
	},
	notifications: {
		backgroundColor: 'white',
		position: 'fixed',
		top: 0,
		right: 0,
		padding: '1rem',
		border: '2px dashed red',
		'@media (max-width: 900px)': {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			border: 'none',
			padding: 0,
		},
	},
	ul: {
		listStyle: 'none',
		padding: 0,
	},
	p: {
		display: 'block',
		minWidth: '250px',
	},
	btn: {
		backgroundColor: 'transparent',
		border: 'none',
	},
	closeIcon: {
		width: '15px',
		height: '15px',
	},
});

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
	handleDisplayDrawer: () => {},
	handleHideDrawer: () => {},
};
Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
};

export default Notifications;
