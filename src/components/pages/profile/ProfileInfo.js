import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { loadPost } from '../../../actions/post';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Badge } from 'native-base';
// import user from '../../img/user.png';

class ProfileInfo extends Component {


    render() {

        const {profile} = this.props.profile
        return (
                 
                <View>
                    <View style={styles.infoEach}>
                        <Icon name="ios-person" />
                        <Text>{profile.bio}</Text>
                    </View>
                    <View style={styles.infoEach}>
                        <Icon name="calendar" />
                        <Text>1998 August </Text>
                    </View>
                    <View style={styles.infoEach}>
                        <Icon name="ios-time" />
                        <Text>1998 August </Text>
                    </View>
                </View>


        );


    }
}
const styles = {

   
    infoEach: {
        flexDirection: "row"
    }


}

export default ProfileInfo;