import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, ScrollView } from 'react-native';
import { loadProfile } from '../../../actions/profile';
import {loadUserPost} from '../../../actions/post'
import { Container, Spinner, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Badge } from 'native-base';
import ProfileBasics from './ProfileBasics'
import PersonalPost from './PersonalPost'
import ProfileInfo from './ProfileInfo'

class Profile extends Component {

	componentDidMount(){
		this.props.loadProfile()
		this.props.loadUserPost()
		console.log('Loaded profile: '+this.props.loadProfile())
	}


	render() {
		console.log("LOADING: " +JSON.stringify(this.props.profile));
		const { profile } = this.props
		const { userposts } = this.props.post

		console.log('i\m Loading post: ' + JSON.stringify(userposts))

		if(!profile){
			return <Spinner/>
		}

		return (
			<Container style={styles.Container}>
				<ProfileBasics style={styles.profileBasics} profile={profile}/>
				<ProfileInfo style={styles.profileInfo} profile={profile}/>
				<ScrollView>
									<PersonalPost style={styles.profilepersonal} post={userposts} />

				</ScrollView>

				{/* { !userposts || userposts === undefined ? <Spinner/> : <PersonalPost style={styles.profilepersonal} post={userposts}/>} */}
			</Container>

		);


	}
}
const styles = {
	Container: {
		flex: 1
	},
	profileInfo:{
		height:'20%',
		flex:1
	},
	profilepersonal:{
		height:'35%',
		flex:1,
		marginLeft:30
	},
	profileBasics:{
		height:'45%',
		flex:1
	}

}


const mapStateToProps = state =>({
	profile: state.profiles,
	post: state.posts
})
export default connect(mapStateToProps, { loadProfile, loadUserPost}) (Profile);