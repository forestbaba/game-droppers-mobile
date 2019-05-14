import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import { connect } from 'react-redux';
import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { loginUser, usernameChanged, passwordChanged } from '../../actions/auth';
import { Actions } from 'react-native-router-flux';
// const Spinner = require('react-native-spinkit');

import Logo from './Logo';
class LoginForm extends Component {
	constructor(props) {
		super(props)


		// this.onChange = this.onChange.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
	}
	onusernameChanged(text) {
		this.props.usernameChanged(text);
	}
	onPasswordChanged(text) {
		this.props.passwordChanged(text);
	}

	signupScreen() {
		Actions.signup();
	}
	gotoHomepage() {

		// e.preventDefault();
		const newuser = {
			username: this.props.username,
			password: this.props.password
		};

		this.props.loginUser(newuser);
		console.log('Username: ' + this.props.username)


	}


	render() {
		return (
			<View style={styles.container}>
				<Logo />

				<TextInput style={styles.textInput} placeholder="Email"
					underlineColorAndroid="rgba(0,0,0,0)"
					placeholderTextColor="#ffffff"
					selectionColor='#ffffff'
					value={this.props.username}
					onChangeText={this.onusernameChanged.bind(this)}
					onSubmitEditing={() => this.password.focus()} />

				<TextInput style={styles.textInput}
					placeholder="Password"
					underlineColorAndroid="rgba(0,0,0,0)"
					placeholderTextColor='#ffffff'
					secureTextEntry
					value={this.props.password}
					onChangeText={this.onPasswordChanged.bind(this)}

				/>

				<TouchableOpacity style={styles.loginButon} 
				onPress={this.gotoHomepage.bind(this)}>
					<Text style={styles.loginButtonText}>Login</Text>
				</TouchableOpacity>
				<View style={styles.signupView}>
				<Spinner style={styles.Spinner}/>
				<Text style={styles.donthaveAccount}>Dont have account  yet?</Text>
					<TouchableOpacity onPress={this.signupScreen}><Text style={styles.signupText}> Sign Up</Text></TouchableOpacity>
				</View>




			</View>
		);


	}
}
const mapStateToProps = state => ({
	auth: state.user,
	errors: state.auth.errors,
	username: state.auth.username,
	password: state.auth.password,
	loading: state.auth.loading,
	signInError: state.auth.signInError
})

const styles = {

	container: {
		backgroundColor: '#455a64',
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	errorStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'

	},
	textInput: {
		width: 300,
		backgroundColor: "rgba(255,255,255,0.3)",
		fontSize: 16,
		borderRadius: 25,
		paddingHorizontal: 18,
		color: '#ffffff',
		marginVertical: 10
	},
	loginButon: {
		width: 300,
		backgroundColor: "#1c313a",
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 16
	},
	donthaveAccount: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: 16
	},
	loginButtonText: {

		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center'
	},
	signupView: {
		flexGrow: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
		marginVertical: 16

	},
	signupText: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '500'
	},
	errorMessage: {
		fontSize: 12,
		marginTop: 10,
		color: 'transparent'
	}
}
export default connect(mapStateToProps, { usernameChanged, passwordChanged, loginUser })(LoginForm);




























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
	// onPasswordChanged(text) {
	// 	this.props.passwordChanged(text);
	// }



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
