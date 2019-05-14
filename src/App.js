/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/pages/LoginForm';
import { Provider } from 'react-redux';
import store from './store';
import Router from './Router';
import Routes from './Routes';


class App extends Component {
	componentDidMount() {

	}
	render() {
		return (
			<Provider store={store}>
				{/* <Router /> */}

				<View style={styles.container}>
					<StatusBar
						backgroundColor="#1c313a"
						barStyle="light-content" />


						<Routes/>

				</View>
			</Provider>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#455a64',
		flex: 1
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});
export default App;
