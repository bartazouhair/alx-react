import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite/no-important';

const listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
	{
		id: 0,
		type: 'default',
		value: 'New course available',
	},
	{
		id: 1,
		type: 'urgent',
		value: 'New resume available',
	},
	{
		id: 2,
		type: 'urgent',
		html: { __html: getLatestNotification() },
	},
];

const main_color = '#e0354b';
const styles = new StyleSheet.create({
	app: {
		fontSize: '20px',
	},
	app_body: {
		boxSizing: 'border-box',
		padding: '3rem',
		minHeight: '50vh',
		borderTop: `5px solid ${main_color}`,
	},
	footer: {
		borderTop: `5px solid ${main_color}`,
		display: 'flex',
		justifyContent: 'center',
		fontStyle: 'italic',
	},
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayDrawer: false,
		};

		this.handleLogOut = this.handleLogOut.bind(this);
		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
	}

	handleDisplayDrawer() {
		this.setState({
			displayDrawer: true,
		});
	}
	handleHideDrawer() {
		this.setState({
			displayDrawer: false,
		});
	}

	handleLogOut = (evt) => {
		if (evt.ctrlKey && evt.key === 'h') {
			evt.preventDefault();
			alert('Logging you out');
			this.props.logOut();
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleLogOut);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleLogOut);
	}

	render() {
		return (
			<>
				<div className={css(styles.app)}>
					<Notifications
						listNotifications={listNotifications}
						displayDrawer={this.state.displayDrawer}
						handleDisplayDrawer={this.handleDisplayDrawer}
						handleHideDrawer={this.handleHideDrawer}
					/>
					<Header />
					<div className={css(styles.app_body)}>
						{this.props.isLoggedIn ? (
							<BodySectionWithMarginBottom title='Course list'>
								<CourseList listCourses={listCourses} />
							</BodySectionWithMarginBottom>
						) : (
							<BodySectionWithMarginBottom title='Log in to continue'>
								<Login />
							</BodySectionWithMarginBottom>
						)}
						<BodySection title='News from the School'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit enim varius
								cursus luctus. Proin quis erat vitae ante accumsan lobortis. Etiam et gravida lorem.
								Cras faucibus id ligula a cursus. Sed porta mauris non fringilla lacinia. Praesent sit
								amet leo tellus. Fusce vestibulum, massa eget egestas aliquet, lacus orci euismod purus,
								sed ullamcorper erat mauris a tortor.
							</p>
						</BodySection>
					</div>
					<Footer className={css(styles.footer)} />
				</div>
			</>
		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {},
};
App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

export default App;
