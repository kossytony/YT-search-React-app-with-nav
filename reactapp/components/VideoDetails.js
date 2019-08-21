import React, {Component} from 'react';
import {AppRegistry, View, Text, Image} from 'react-native';



export default class VideoDetails extends Component {

    render () {

        return(
                <View>
                    <Image/>
                    <Text></Text>
                    <Text></Text>
                </View>
        );
    };
}


AppRegistry.registerComponent( 'VideoDetails', ()=>VideoDetails);