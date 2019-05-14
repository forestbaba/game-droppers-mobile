import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';

class Logo extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Image style={{ width: 40, width: 70 }}
					source={require('../../img/2odds.png')}
				/>
				<Text style={styles.welcome}>Welcome to 2ODDS</Text>
			</View>
		);


	}
}


const styles = {

	container: {
		backgroundColor: '#455a64',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	welcome:{

		color:'rgba(255, 255,255,0.7)'
	},
	errorStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'

	},
	errorMessage: {
		fontSize: 12,
		marginTop: 10,
		color: 'transparent'
	}
}
export default Logo;




























// import React, { Component } from 'react';
// import { Button, Card, CardSection, Input, Spinner } from './common';
// import { connect } from 'react-redux';
// import { View, Text } from 'react-native';
// import { loginUser, usernameChanged, passwordChanged } from '../actions/auth';

// class LoginForm extends Component {
// 	state = {
// 		username: '',
// 		password: ''
// 	};

// 	componentWillMount() {
// 		console.log('Error wa')
// 	}
// 	componentDidMount() {
// 		{ this.props.loading ? console.log('Loading --- dey' + errors) : console.log('cooool') }
// 	}

// 	onButtonPress() {
// 		const userData = {
// 			username: this.props.username,
// 			password: this.props.password
// 		};

// 		this.props.loginUser(userData);
// 		console.log('User -- data: ' + userData.username)

// 	}
// 	onusernameChanged(text) {
// 		this.props.usernameChanged(text);
// 	}
// 	onPasswordChanged(text) {
// 		this.props.passwordChanged(text);
// 	}



// 	displayErrorCheck() {
// 		if (this.props.errors) {
// 			return (
// 				<View style={{ backgroundColor: 'white' }}>
// 					<Text style={styles.errorStyle}>
// 						{this.props.errors}
// 					</Text>
// 				</View>
// 			)
// 		}
// 		console.log('I am Fired!!!');
// 	}

// 	renderButton() {
// 		if (this.props.loading) {
// 			return <Spinner size="large" />
// 		}
// 		return <Button onPress={this.onButtonPress.bind(this)}>
// 			Login
//       </Button>





// 	}
// 	render() {
// 		return (
// 			<Card>
// 				<CardSection>
// 					<Input
// 						placeholder="theuser"
// 						label="Username"
// 						value={this.props.username}
// 						onChangeText={this.onusernameChanged.bind(this)}
// 					/>
// 				</CardSection>


// 				<CardSection>
// 					<Input
// 						secureTextEntry
// 						placeholder="password"
// 						label="Password"
// 						value={this.props.password}
// 						onChangeText={this.onPasswordChanged.bind(this)}
// 					/>
// 				</CardSection>
// 				{this.displayErrorCheck}
// 				<CardSection>

// 					<Button onPress={this.onButtonPress.bind(this)}>
// 						Login
// 					</Button>
// 				</CardSection>
// 				{ this.props.signInError ? null :<Spinner size="large" />}
// 				<Text style={[styles.errorMessage, this.props.signInError && { color: 'black' }]}>Error logging in. Please try again.</Text>

// 			</Card>
// 		);


// 	}
// }
// const mapStateToProps = state => ({
// 	auth: state.user,
// 	errors: state.auth.errors,
// 	username: state.auth.username,
// 	password: state.auth.password,
// 	loading: state.auth.loading,
// 	signInError: state.auth.signInError
// })

// const styles = {
// 	errorStyle: {
// 		fontSize: 20,
// 		alignSelf: 'center',
// 		color: 'red'

// 	},
// 	errorMessage: {
// 		fontSize: 12,
// 		marginTop: 10,
// 		color: 'transparent',
// 		fontFamily: fonts.base
// 	}
// }
// export default connect(mapStateToProps, { usernameChanged, passwordChanged, loginUser })(LoginForm);
