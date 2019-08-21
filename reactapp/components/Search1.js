import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, AppRegistry } from 'react-native';
import {  Button } from 'react-native-elements';




export default class Search1 extends Component {

  state = {
    search : '',
    
  };
 

updateTextInput =(search)=>{
  this.setState({search})};


  
  render() {
    
    return (
      <View>
        
        <View style={styles.containerStyle}>

          <TextInput style={styles.searchTextStyle}
          onChangeText ={this.updateTextInput}
            value={this.state.search}
          />
          <Button
            style={styles.buttonStyle}
            title={this.props.loading ? 'loading' :'Search'}
            onPress={()=>this.props.onPress(this.state.search)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 0.15,
  },
  searchTextStyle: {
    flex: 1
  },
  buttonStyle: {
    height: 30,
    marginBottom: 8
  }
});

AppRegistry.registerComponent('Search1', () => Search1);

