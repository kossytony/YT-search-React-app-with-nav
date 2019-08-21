import React from 'react';
import {AppRegistry, ScrollView, View, StyleSheet} from 'react-native';
import VideoListItems from './VideoListItem';


const VideoList = (props) => {
      const videoItems =  props.videos.map(video =>
        (<VideoListItems
            key = {video.etag}
            video ={video}
            onPress= {props.onPress}
        />
        ));

return (
        <ScrollView>
        <View style ={styles.containerStyle}>
          {videoItems}
        </View>
    </ScrollView>
);
};

export default VideoList;

const styles = StyleSheet.create({
    containerStyle : {
        marginBottom : 10,
        marginLeft : 10,
        marginRight : 10
    }
});
AppRegistry.registerComponent('videoList', () => VideoList); 