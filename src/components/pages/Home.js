import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image,TouchableOpacity } from 'react-native';
import { loadPost } from '../../actions/post';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import user from '../../img/user.png';
import TabsItem from '../Tabitems'
import PostItem from '../pages/post/PostItem'
import PostFeed from '../pages/post/PostFeed'
import Spinner from "../../components/common/Spinner";
import moment from 'moment'
import { Actions } from 'react-native-router-flux';

class Home extends Component {



	componentDidMount() {
		console.log('Home component Did mount........' + global.authToken)
		this.props.loadPost();
	}


	// componentDidMount(){
	// 	console.log('Home component Did mount........' + global.authToken)
	// 	this.props.loadPost();

	// 	// console.log("Loaded Post now: " + this.props.loadPost())

	// 	// const token = await SecureStore.getItemAsync('login_token');
	// 	// console.log('Home component will mount token: ' + token);
	// }
	// componentWillReceiveProps(nextProps){
	// 	console.log('inside component will receive props')
	// }

	// renderAlbums() {
	// 	return this.state.name.map(album => {
	// 		return (
	// 			<Text key={album.text}>{album.name}</Text>
	// 		);
	// 	});
	// }

	// 	render() {

	// 		const { posts } = this.props.posts;
	// 		return posts.map(post => <PostItem key={post._id} post={post} />);

	// 		// const on = [1,2,3,4]
	// 		// console.log('Posts: '+ this.props.posts.posts)



	// 		// var data = Array.from(this.props.posts);
	// 		// console.log("Our data: "+typeof(data))

	// 		// this.props.posts.map((post,key) =>{


	// 		// 	console.log('Post Text: '+post.text)
	// 		// })

	loadSinglePost(id){
		Actions.singlepost({postid: id})
		console.log('I should load now	}}}}>' + JSON.stringify(id))
	}

	render() {

		const {_id, loading} = this.props.posts
		let postContent;

	
			// if (loading === true || posts === null){
			// 	 postContent =  <View><Text>Loading</Text></View> 
			// }else{
			// 	postContent = <View><Text>Done</Text></View>
			// }
		

		return (
			<Container>
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
