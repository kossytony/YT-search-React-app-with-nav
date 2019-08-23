import React, { Component } from "react";
import { AppRegistry, View, Keyboard} from "react-native";
import Search1 from './components/Search1';
import AppHeader from "./components/Header";
import searchYoutube from 'youtube-search-api-with-axios';
import VideoList from './components/VideoList';

const API_KEY = '';

 export default class MainApp extends Component {



  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      videos: [],
        touchedVideo : {},
        pageTest : 'page test msg',
    };

  }
  

  onPressSearch = (search) => {
    console.log(search);
    Keyboard.dismiss();
    this.setState({ loading: true })
    searchYoutube({ key: API_KEY, q: search, maxResults: 10 }, videos => {

      this.setState({
        loading: false,
        videos
      })
    })
  };

  onPressUpdateState = (search) => {
    // console.log(prevState);
    //  this.setState (prevState => ({showName : (!prevState.showName) } ));
    console.log(search);
  };
showSelectVideo = (obj)=> {
//     this.setState({touchedVideo : obj})
 console.log(obj);
 video =obj;
this.props.navigation.navigate("VideoDetails", {video});
};

  render () {

    return (
      <View>
        <AppHeader headerText="Youtube Search" />
        <Search1 onPress={this.onPressSearch} loading={this.state.loading} ></Search1>
        <VideoList videos={this.state.videos}  onPress={this.showSelectVideo} />
      </View>
    );

  };
}
AppRegistry.registerComponent('MainApp', () =>MainApp);
