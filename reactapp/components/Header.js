import React from 'react';
import {Header} from 'react-native-elements';
import {AppRegistry} from 'react-native';

const AppHeader = ({headerText})=> 
{
return(
<Header centerComponent={{ text: headerText, style: { color: 'white' } }}
                outerContainerStyles={{backgroundColor : '#E62117'}}
        />
)
};
export default AppHeader;
AppRegistry.registerComponent('AppHeader', ()=>AppHeader); 