import React, {Component} from 'react';
import { AppRegistry} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import MainApp from './main';
import VideoDetails from './components/VideoDetails';

const AppNavigator = createStackNavigator(
  {
    Home: { 
      screen : MainApp,
      navigationOptions : {
        header : null
      }
    },
    VideoDetails : { 
    screen : VideoDetails ,
  }
},
  {
    initialRouteName: "Home"
  }
  
);

const AppContainer = createAppContainer(AppNavigator);

export default class MyApp extends Component {
  render() {
    return (<AppContainer />);
  }
};




AppRegistry.registerComponent( 'MyApp', ()=> MyApp);
