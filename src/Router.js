import React from 'react';
import { Scene, Router, Actions, Text } from 'react-native-router-flux';
import Home from './components/Home';
import List from './components/List';
import News from './components/News';


const RouterComponent = () => {

  const { navigationBarTitleImageStyle } = styles

  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key="container"
        navigationBarTitleImage={require('./img/logo.gif')}
        navigationBarTitleImageStyle={navigationBarTitleImageStyle}
        >
        <Scene key="home" component={Home} />
        <Scene key="list" component={List} title="List" />
        <Scene key="info" component={News} title="Info" />
      </Scene>
    </Router>
  );
};

const styles = {
  navigationBarTitleImageStyle : {
    // デフォルト..
    // "width": 180,
    // "height": 120,
    // "overflow": "hidden",
    // "alignSelf": "center",
    height: 30,
    resizeMode:"center", //cover:比率そのまま横幅に合わせる(デフォルト) stretch:比率を無視して縦幅に合わせる
    // backgroundColor: 'blue'

  }
}

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
