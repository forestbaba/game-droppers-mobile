import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import Spinner from '../../common/Spinner';
import OList from '../post/OList'
import Je from '../post/Je'
import { loadSinglePost } from '../../../actions/post'
import { Container, Thumbnail, Left, Right, Body, Icon, Button, List, ListItem, Content } from 'native-base'
import moment from 'moment'

class SinglePost extends React.Component {

    constructor(props) {
        super(props)

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
    }

    componentDidMount() {

        //  console.log("The post: " + JSON.stringify(this.props.loadSinglePost(this.props.postid)))

        this.props.loadSinglePost(this.props.postid)

    }
    render() {
        let postContent;
        let commentContent;
        let { comments } = this.props.post.post




        if (this.props.post.post === null || this.props.post.post === undefined) {
            postContent = <View><Text>Loading...</Text></View>
        }
        else {
            const { post } = this.props.post

            postContent = <List>
                <ListItem>
                    <Left style={{ marginTop: -5, marginLeft: 0 }}>
                        <Thumbnail source={require('../../../img/user.png')} />

                        <Body style={{ marginTop: -5, marginLeft: 0, flex: 1 }}>
                            <Text>{post.name}</Text>
                            <Text note style={{ flex: 1 }}>{post.text}</Text>
                        </Body>
                    </Left>
                </ListItem>
                <ListItem itemDivider>

                    <Left>
                        <Button transparent>
                            <Icon active name="heart" />
                            <Text style={{ marginLeft: -9 }}>{post.likes && post.likes.length ? post.likes.length : 0}</Text>
                        </Button>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text style={{ marginLeft: -9 }}><Text style={{ marginLeft: -9 }}>{post.comments && post.comments.length ? post.comments.length : 0}</Text></Text>
                            </Button>
                        </Body>

                        <Right>
                            {/* <Text style={{ marginTop: 0, marginLeft: 0 }}>{moment(post.date).fromNow()}</Text> */}
                            <Text style={{ marginTop: 0, marginLeft: 0 }}>{moment(post.date).fromNow()}</Text>
                        </Right>

                    </Left>
                </ListItem>

            </List>
        }

        // if (comments && comments.length !== 0){

        //     {
        //             <Content>
        //             <List>
        //                 <ListItem>
        //                     <Left style={{ marginTop: -5, marginLeft: 0 }}>
        //                         <Thumbnail source={require('../../../img/user.png')} />

        //                         <Body style={{ marginTop: -5, marginLeft: 0, flex: 1 }}>
        //                             <Text>Comment Name</Text>
        //                             <Text note style={{ flex: 1 }}>comment </Text>
        //                         </Body>
        //                     </Left>
        //                 </ListItem>
        //                 <ListItem itemDivider>

        //                     <Left>
        //                         <Button transparent>
        //                             <Icon active name="heart" />
        //                             <Text style={{ marginLeft: -9 }}>likes</Text>
        //                         </Button>
        //                         <Body>
        //                             <Button transparent>
        //                                 <Icon active name="chatbubbles" />
        //                                 <Text style={{ marginLeft: -9 }}><Text style={{ marginLeft: -9 }}>99</Text></Text>
        //                             </Button>
        //                         </Body>

        //                         <Right>
        //                             {/* <Text style={{ marginTop: 0, marginLeft: 0 }}>{moment(post.date).fromNow()}</Text> */}
        //                             <Text style={{ marginTop: 0, marginLeft: 0 }}>uu</Text>
        //                         </Right>

        //                     </Left>
        //                 </ListItem>
        //             </List>
        //             </Content>

        //     }
           

        // } else{
        //     commentContent =   <Text>Nothing</Text>
        //     }

            
            <Container>
             


            </Container>
        console.log('>>>>>>>>>>>>>>>>>>.??: ' + JSON.stringify(this.props.post.comments))
        console.log('Comment: ' + JSON.stringify(this.props.post.comments))
            const { post } = this.props.post

        return (
            <Container>
                {postContent}
                {/* {commentContent} */}
                {/* <OList/> */}
                <Je comments={post.comments} />
            </Container>
        )

    }
}

let mapStateToProps = state => ({
    post: state.posts
})
export default connect(mapStateToProps, { loadSinglePost })(SinglePost);

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    }
})