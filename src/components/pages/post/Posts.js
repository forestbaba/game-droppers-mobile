import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostFeed from "./PostFeed";
import Spinner from "../../common/Spinner";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import { loadPost } from '../../../actions/post';

class Posts extends Component {

  componentDidMount() {
    console.log('Home component Did mount........' + global.authToken)
    this.props.loadPost();
  }
  render() {
      const { posts, loading } = this.props.posts;
      let postContent;

      if(posts === null || loading){
          postContent = <Spinner/>
      }
      else{
          postContent = <PostFeed posts={posts}/>
      }
    return (
      <Container>
        <Content>
              {postContent}
        </Content>
      </Container>
    );
  }
}

// Posts.propTypes ={
//     getPosts: PropTypes.func.isRequired,
//     post: PropTypes.object.isRequired
// }

const mapStateToProps = state =>({
    posts: state.posts
});

export default connect(mapStateToProps, {loadPost}) (Posts);
