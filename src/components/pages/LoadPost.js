import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import {loadPost} from '../../actions/post';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import user from '../../img/user.png';
import TabsItem from '../Tabitems'

class LoadPost extends Component {

	

	render() {
		return (
			<Container><Text>Load Post components</Text>
		<TabsItem/>
			</Container>

		);


	}
}



export default  LoadPost;