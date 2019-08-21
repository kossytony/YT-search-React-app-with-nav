import React from 'react';
import {AppRegistry, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';





const VideoListItems = (props) => {

    

return(
<TouchableOpacity
onPress ={()=>props.onPress(props.video.snippet)}
//onPress= {()=> console.log(props.video.snippet.title + "was pressed")}
>
<View
>
    <Image
       style ={styles.imageStyle} source = {{uri : props.video.snippet.thumbnails.medium.url}}
    />
    <Text style ={styles.titleStyle}> {props.video.snippet.title}</Text>
    <Text>{props.video.snippet.description}</Text>
    <Text>{props.video.snippet.channelTitle}</Text>
    <Text></Text>
    </View>
    </TouchableOpacity>
);
};

const styles = StyleSheet.create({

imageStyle : {
    alignSelf : 'stretch',
    height : 180,
},
titleStyle : {
fontWeight : "bold",
fontSize : 15,
textAlign : 'center'

}
})
export default VideoListItems;
AppRegistry.registerComponent('VideoListItems', ()=>VideoListItems); 
