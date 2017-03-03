import React from 'react';

import LocalImage from './LocalImage'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import {
	Actions,
}from 'react-native-router-flux';

class LawOne extends React.Component {
	state = {
      ethicsAgree: '',
	}
	render() {
		return(
      <View style={styles.witiContainer}>
        <View style={styles.witiPicture}>
          <LocalImage
          source={require('../pictures/witioo4.png')}
					originalWidth={1366}
          originalHeight={768}
          />
        </View>
          <Text style={styles.witiTitle}>
            Law #1
          </Text>
					<Text style={styles.witiText}>
					Community members may not injure a human being or, through inaction, allow a human being to come to harm.
					</Text>
		<View style={styles.witiNav}>
      <TouchableOpacity onPress={() => { Actions.front({ name: this.state.name }); }}>
        <Text style={styles.witiSorry}>Sorry, no can do
        </Text>
      </TouchableOpacity>
       <View style={styles.witiBar}></View>
		     <TouchableOpacity onPress={() => { Actions.lawTwo({ name: this.state.name }); }}>
		       <Text style={styles.buttonText}>
		         I Understand </Text>
           <Text style={styles.buttonText2}>
             and I am still in
		       </Text>
		    </TouchableOpacity>
		  </View>
   </View>
	    );
    }
}

var styles = StyleSheet.create({
  witiContainer: {
    flex: 1,
  },
  witiPicture: {
    flex: 2,
    alignItems: 'center',
  },
  witiNav: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 10
  },
  witiBar: {
    height: 2,
    backgroundColor: '#CCCCCC',
    paddingLeft: 8,
    paddingRight: 8,
    width: 250,
  },
  title: {
  	marginLeft: 20,
  	fontSize: 20
  },
  witiTitle: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 24,
    color: '#666666',
  },
  witiTextContainer: {
    paddingRight: 8,
    paddingLeft: 8,
  },
  witiText: {
    color: '#666666',
    paddingBottom: 5,
    paddingTop: 5,
		paddingLeft: 15,
		paddingRight: 15,
		alignSelf: 'center',
  },
  witiSorry: {
    paddingBottom: 15,
  },
  witiTextBold: {
    fontWeight: 'bold',
    color: '#666666',
    paddingBottom: 5,
    paddingTop: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#666666',
  },
  buttonText2: {
    paddingTop: 2,
    textAlign: 'center',
    color: '#666666',
  },
});

export default LawOne;
