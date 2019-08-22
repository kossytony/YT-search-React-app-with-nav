import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, StyleSheet, Button } from 'react-native';





export default class VideoDetails extends Component {

	constructor(props) {
		super(props)

		this.state = {
			video: this.props.navigation.state.params.video,

		}
	};

	render() {

		return (
			<View>
				<Image style={styles.imageStyle} source={{ uri: this.state.video.thumbnails.medium.url }} />
				<Text style={styles.titleStyle}> {this.state.video.title}</Text>
				<Text>{this.state.video.description}</Text>
				<Button onPress title='View video online' > </Button>
			</View>
		);
	};
}
const styles = StyleSheet.create({

	imageStyle: {
		alignSelf: 'stretch',
		height: 180,
	},
	titleStyle: {
		fontWeight: "bold",
		fontSize: 15,
		textAlign: 'center'
	},
	buttonStyle: {
		

	}
})

AppRegistry.registerComponent('VideoDetails', () => VideoDetails);