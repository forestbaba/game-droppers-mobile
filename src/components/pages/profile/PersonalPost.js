import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, TouchableOpacity } from 'react-native';
import { loadPost } from '../../../actions/post';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, List, Right, Badge, ListItem } from 'native-base';
import ProfileBasics from './ProfileBasics'
import moment from 'moment'

class PersonalPost extends Component {

    state = {
        names: [
            {
                id: 0,
                name: 'Ben',
            },
            {
                id: 1,
                name: 'Susan',
            },
            {
                id: 2,
                name: 'Robert',
            },
            {
                id: 3,
                name: 'Mary',
            }
        ]
    }
    alertItemName = (item) => {
        alert(item.name)
    }


    render() {

        const { post } = this.props
        console.log('Personal post real: ' + JSON.stringify(post))

        let postContent;

        if (post && post.length !== 0) {
            //   return  postContent = <View>
            //         {
            //             post.map((key, pos) => {
            //                 <Text key={pos._id}>Title</Text>
            //             })
            //         }
            //     </View>


            return postContent = <View>
                {
                    this.props.post.map((item, index) => (

                        <List>
                            <ListItem>
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.container}
                                    onPress={() => this.alertItemName(item)}>
                                    <View style={styles.Container}>
                                        <View>
                                            <Thumbnail source={require('../../../img/user.png')} style={{ alignSelf: 'flex-start' }} />
                                        </View>
                                        <View>
                                            <Text style={styles.text}>
                                                {item.name}
                                            </Text>

                                            <Text style={styles.text}>
                                                {item.text}
                                            </Text>
                                            <View style={styles.Container}>
                                                <View style={styles.eachContainer} >
                                                    <Icon name='ios-heart' />
                                                    <Text>{item.comments && item.comments.length > 0 ? item.comments.length : 0}</Text>
                                                </View>

                                                <View style={styles.eachContainer}>
                                                    <Icon name='ios-chatbubbles' />
                                                    <Text>{item.likes && item.likes.length > 0 ? item.likes.length : 0}</Text>
                                                </View>
                                            <Text>{moment(item.date).fromNow()}</Text>
                                            </View>
                                        </View>

                                    </View>

                                </TouchableOpacity>
                            </ListItem>
                        </List>

                    ))
                }
            </View>


        } else {
            return postContent = <View>
                <Text>Nothing to render</Text>
            </View>
        }


        return (
            // <View style={styles.Container}>
            { postContent }
            // </View>

        );


    }
}
const styles = {
    Container: {
        flex: 1,
        flexDirection: 'row',

    },
    eachContainer:{
        flexDirection: 'row'

    }

}

export default PersonalPost;