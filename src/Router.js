import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/pages/LoginForm';
import Dashboard from './components/Dashboard';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }}>
    <Scene>
      {/* <Scene key="auth"> */}
        <Scene key="login" component={LoginForm} title="Please Login" />
      {/* </Scene> */}

      <Scene key="main">
        <Scene
          rightTitle="Add"
          key="userdashboard"
          component={Dashboard}
          title="Employees"
          initial
        />
        <Scene key="employeeCreate" component={Dashboard} title="Dashboard" />
      </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
