import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/pages/LoginForm';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import LoadPost from './components/pages/LoadPost';
import Dashboard from './components/Dashboard';
import SecondDashboard from './components/pages/SecondDashboard';
import Profile from './components/pages/Profile';
import SinglePost from './components/pages/post/SinglePost';
import { Text } from 'react-native'


import { Icon } from 'native-base';
class TabIcon extends React.Component {
  render() {
    return (
      <Icon style={{ color: this.props.focused ? '#0426f4' : '#666b6c' }} name={this.props.name}></Icon>
    );
  }
}


class Routes extends Component {

  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="login" component={LoginForm} title="Login" initial />
          <Scene key="signup" component={SignUp} title="Sign Up" />
          <Scene key="home" component={Home} title="Home" />
          <Scene key="post" component={LoadPost} title="Post" />
          <Scene key="profile" component={Profile} title="Profile" />
          <Scene key="singlepost" component={SinglePost} title="Post" hideNavBar={false} back={true}/>


          <Scene key="tabbar"
            tabs tabBarStyle={{ backgroundColor: '#ffffff' }}
             >

            <Scene key="pro"
              title="Home" icon={TabIcon}
              name="home"
              activeTintColor={"#8d6669"}
              animationEnabled={true} >

              <Scene key="profile"
                component={Home}
                title="Profile" />
            </Scene>

            <Scene key="secondScreen"
              title="Home" icon={TabIcon}
              name="person" activeTintColor={"#8d6669"}
              animationEnabled={true} >

              <Scene key="secondScreen"
                component={SecondDashboard}
                title="Profile" />
            </Scene>
          </Scene>

        </Stack>
      </Router>

    );
  }
};

export default Routes;
