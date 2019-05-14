import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner } from 'native-base';

export default class Je extends React.Component {
    render() {

        console.log('Expected content: ' + JSON.stringify(this.props.names))
        return (

            this.props.comments !== undefined && this.props.comments.length > 0 ?


                <View>
                    {
                        this.props.comments.map((item, index) => (
                            <TouchableOpacity>
                                <List>
                                    <ListItem avatar>
                                        <Left>
                                            <Thumbnail source={require('../../../img/user.png')} />
                                        </Left>
                                        <Body>
                                            <Text>{item.name}</Text>
                                            <Text note>{item.text}</Text>
                                        </Body>
                                        <Right>
                                            <Text note>{item.time}</Text>
                                        </Right>
                                    </ListItem>
                                </List>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                : <Spinner color='blue' />
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});