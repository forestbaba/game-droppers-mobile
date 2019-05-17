import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, TouchableOpacity, TextInput, Dimensions, Animated,Easing } from 'react-native';
import { loadPost } from '../../actions/post';
import { Container, Header, Content, Card, CardItem, Thumbnail, Badge, Text, Button, Icon, Left, Body, Right, Fab, ListItem, Input, InputGroup } from 'native-base';
import user from '../../img/user.png';
import TabsItem from '../Tabitems'
import PostItem from '../pages/post/PostItem'
import PostFeed from '../pages/post/PostFeed'
import Spinner from "../../components/common/Spinner";
import moment from 'moment'
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import Toast from 'react-native-whc-toast'
import renderIf from './renderIf';
const {height,width} = Dimensions.get('window')



class Home extends Component {

	constructor() {
		super();
		this.state = {
			status: false,
			TextValue: '',
			rotate: false,
			toggle: false,
			value: ''


		}
		this.rotatingDone = this.rotatingDone.bind(this);

	}
	toggleStatus() {
		this.setState({
			status: !this.state.status,
			 rotate: true 

		});
		console.log('toggle button handler: ' + this.state.status);
	}

	StartImageRotateFunction() {
		this.RotateValueHolder.setValue(0);
		Animated.timing(this.RotateValueHolder, {
			toValue: 1,
			duration: 3000,
			easing: Easing.linear,
		}).start(() => this.StartImageRotateFunction());
	}

	GetValueFunction = (ValueHolder) => {

		var Value = ValueHolder.length.toString();

		this.setState({ TextValue: Value });

	}




	componentDidMount() {
		console.log('Home component Did mount........' + global.authToken)
		this.props.loadPost();

		const elm = this.image;
		// elm.addEventListener("animationend", this.rotatingDone);
	}

	componentWillUnmount() {
		const elm = this.image;
		elm.removeEventListener("animationend", this.rotatingDone);
	}
	rotatingDone() {
		this.setState(function (state) {
			return {
				toggle: !state.toggle,
				rotate: false
			};
		});
	}

	changePost(){
		const maxLength = 100;
		this.setState({
			textLength: maxLength - text.length,
			text, 
		});
	}
	

	loadSinglePost(id) {
		Actions.singlepost({ postid: id })
		console.log('I should load now	}}}}>' + JSON.stringify(id))
	}

	render() {

		// const RotateData = this.RotateValueHolder.interpolate({
		// 	inputRange: [0, 1],
		// 	outputRange: ['0deg', '360deg'],
		// });

		const { _id, loading } = this.props.posts
		let postContent;


		// if (loading === true || posts === null){
		// 	 postContent =  <View><Text>Loading</Text></View> 
		// }else{
		// 	postContent = <View><Text>Done</Text></View>
		// }


		return (


			<Container style={{ backgroundColor:'#e6e6e6'}}>


				{/* <Fab
						direction="right"
						containerStyle={{ marginLeft: 10 }}
						style={{ backgroundColor: '#5067FF' }}
						onPress={() => {
						this.refs.toast.show('hello toast')}}
						position="bottomRight">
						<Icon name="md-share" />
					</Fab> */}


				{!this.state.status ? renderIf(!this.state.status)(

					<Content>

						{/* {postContent} */}

						{
							this.props.posts.posts.map((post) => {

								return (

									<TouchableOpacity key={post._id} id={post._id} onPress={this.loadSinglePost.bind(this, post._id)}>
										<Card  >
											<CardItem>
												<Left style={{ marginTop: -5, marginLeft: 0 }}>
													<Thumbnail source={require('../../img/user.png')} />

													<Body style={{ marginTop: -5, marginLeft: 0, flex: 1 }}>
														<Text>{post.name}</Text>
														<Text note style={{ flex: 1 }}>{post.text}</Text>
													</Body>
												</Left>


											</CardItem>



											<CardItem style={{ marginTop: -10, marginLeft: 60 }}>
												<Left>
													<Button transparent>
														<Icon active name="heart" />
														<Text style={{ marginLeft: -9 }}>{post.likes.length}</Text>
													</Button>
													<Body>
														<Button transparent>
															<Icon active name="chatbubbles" />
															<Text style={{ marginLeft: -9 }}>{post.comments.length}</Text>
														</Button>
													</Body>

													<Right>
														<Text style={{ marginTop: 0, marginLeft: 0 }}>{moment(post.date).fromNow()}</Text>
													</Right>

												</Left>

											</CardItem>
										</Card>
									</TouchableOpacity>
								)
							})}


					</Content>
					// <Toast ref="toast" />

				) :
					<View  style={{flexDirection:"column"}}>

						<Icon name="ios-close-circle" style={{ alignSelf: 'flex-end' }} />
						<TextInput style={styles.textInput} placeholder="Do you care to drop two odds?"
							underlineColorAndroid="rgba(0,0,0,0)"
							placeholderTextColor="#dbdbde"
							selectionColor='#ffffff'
							multiline= {true}
							maxLength={200}
							onChangeText={(value) => this.setState({ value })}

						 />

						<View style={{ flexDirection: 'row', backgroundColor: '#dbdbde' }}>
							<View style={{
								flexDirection: 'row',
								marginLeft: 10, borderRadius: 15,
								padding: 10, backgroundColor: '#dbdbde'
							}}>
								<Text> Characters Left:{this.state.value.length}/200</Text>
								
							</View>

							<View style={{ flexGrow: 1 }}>
								<TouchableOpacity
									style={styles.postButton}><Text style={{ color: '#fff', textAlign: 'center' }}>Post</Text></TouchableOpacity></View>

						</View>



					</View>

					// <Content>
					// 		<ListItem>
					// 			<InputGroup >
					// 				<TextInput stackedLabel label="Permanent Address" placeholder="Address" maxLength={4} />
					// 			</InputGroup>
					// 		</ListItem>
					// 	</Content>
				}




				<TouchableOpacity

					activeOpacity={1.0}
					onPress={this.clickHandler}
					style={styles.TouchableOpacityStyle}
					onPress={() => this.toggleStatus()}>
					<Image
						//We are making FAB using TouchableOpacity with an image
						//We are using online image here
						source={{
							uri: 'https://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
						}}
						//You can use you project image Example below
						//source={require('./images/float-add-icon.png')}
						style={styles.FloatingButtonStyle}
					/>

				</TouchableOpacity>


			</Container>

		)






		//	})


		// // 			<View>
		// // 			{/* {this.renderAlbums()} */}
		// // 				{this.props.posts.posts.map((pos, key) =>{
		// // 					<Text>{pos.text}</Text>
		// // 				})}

		// // </View>

		//);


	}
}


const styles = {

	container: {
		backgroundColor: '#455a64',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	postButton:{
		alignSelf: 'flex-end',
		marginRight: 30,
		backgroundColor: '#1113f9',
		borderRadius: 15,
		paddingRight: 10,
		paddingLeft: 10,
		marginTop: 8
	},
	welcome: {

		color: 'rgba(255, 255,255,0.7)'
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
	},


	MainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5F5F5',
	},

	TouchableOpacityStyle: {
		position: 'absolute',
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		right: 30,
		bottom: 30,
	},

	FloatingButtonStyle: {
		resizeMode: 'contain',
		width: 50,
		height: 50,
		//backgroundColor:'black'
	},


	textInput: {
		width: 300,
		backgroundColor: "#ffffff",
		fontSize: 16,
		borderRadius: 5,
		height:80,
		color: '#282845',
		marginVertical: 10,
		width:width,
		marginLeft:10,
		marginRight:10,
		multiline:true
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

const mapStateToProps = state => ({
	posts: state.posts

})

export default connect(mapStateToProps, { loadPost })(Home);




























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
