import React, {Component} from 'react'

class PostItem extends Component{
    render(){

        const { posts } = this.props.posts;

        return(

           
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../../img/user.png')} />
                                <Body>
                                    <Text>{posts.name}</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>

                        <CardItem style={{ marginTop: -10 }}>
                            <Left>
                                <Button transparent>
                                    <Icon active name="heart" />
                                    <Text style={{ marginLeft: -9 }}>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text style={{ marginLeft: -9 }}>4 Comments</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>
              
        )
    }
}

export default PostItem;