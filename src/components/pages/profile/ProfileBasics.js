import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { loadPost } from '../../../actions/post';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Badge } from 'native-base';
// import user from '../../img/user.png';

class ProfileBasics extends Component {

    render() {
       const {profile} = this.props.profile
        console.log("Profile user: " + JSON.stringify(this.props))
        return (
            <View style={styles.thumbnailContainer}>
                <Thumbnail source={require('../../../img/user.png')} />
                <View style={styles.nameContainer}>
                    <Text style={styles.fullname}>{profile.name}</Text>
                    <Text style={styles.username}>hjhjh</Text>
                </View>

                <View style={styles.basicRowContainer}>
                    <View style={styles.eachRowContainer} >
                        <Badge primary>
                            <Text>2000</Text>
                        </Badge>
                        <Text>Following</Text>
                    </View>
                    <View style={styles.eachRowContainer}>
                        <Badge primary>
                            <Text>2000</Text>
                        </Badge>
                        <Text>Followers</Text>

                    </View>
                    <View style={styles.eachRowContainer}>
                        <Badge primary>
                            <Text>2000</Text>
                        </Badge>
                        <Text>Posts</Text>

                    </View>
                </View>

            </View>

        );


    }
}
const styles = {

    thumbnailContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    basicRowContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        width: '100%',
        marginTop: 10
    },
    eachRowContainer: {
        flexDirection: "column",
        marginLeft: 5,
        marginRight: 5
    },
    nameContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'


    },
    fullname: {
        fontSize: 23,
        color: 'black'
    },
    username: {
        fontSize: 15,
        color: '#848d95'
    },
    infoEach:{
        flexDirection:"row"
        // alignSelf:'left'
    }


}

export default ProfileBasics;