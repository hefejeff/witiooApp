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

class LawTwo extends React.Component {
	state = {
      name: '',
	}
	render() {
		return(
      <View style={styles.witiContainer}>
        <View style={styles.witiPicture}>
          <LocalImage
          source={require('../pictures/witioo3.png')}
					originalWidth={1366}
          originalHeight={768}
          />
          </View>
          <Text style={styles.witiTitle}>
            Law #2
          </Text>
          <Text style={styles.witiText}>
					Community members must respond to any human beings in distress, while protecting both their integrity and privacy, except where it would conflict with the First Law.
          </Text>
					<View style={styles.witiNav}>
          <TouchableOpacity onPress={() => { Actions.front({ name: this.state.name }); }}>
          <Text style={styles.witiSorry}>Sorry, no can do </Text>
          </TouchableOpacity>
       <View style={styles.witiBar}></View>
		     <TouchableOpacity onPress={() => { Actions.lawThree({ name: this.state.name }); }}>
		       <Text style={styles.buttonText}>
		         I am Ready </Text>
           <Text style={styles.buttonText2}>
             and will do my best
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
    marginTop: 5,
    alignItems: 'flex-start',
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


export default LawTwo;
