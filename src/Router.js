import React from 'react';
import { Scene, Router, Actions, Text } from 'react-native-router-flux';
import Home from './components/Home';
import List from './components/List';
import News from './components/News';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="home" component={Home} title="Home" />
      <Scene key="list" component={List} title="List" />
      <Scene key="info" component={News} title="Info" />
    </Router>
  );
};

export default RouterComponent;


// <Scene key="main">
//   <Scene
//     onRight={() => Actions.employeeCreate()}
//     rightTitle="Add"
//     key="employeeList"
//     component={EmployeeList}
//     title="Employees"
//     initial
//   />
//   <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
//   <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
// </Scene>
