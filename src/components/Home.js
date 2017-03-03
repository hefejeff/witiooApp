import React from 'react';

import LocalImage from './LocalImage'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage,
  AlertIOS,
} from 'react-native';

import {
	Actions,
}from 'react-native-router-flux';

class Home extends React.Component {
	state = {
      ethicsAgree: '',
	}

	render() {
		return(
      <View style={styles.witiContainer}>
        <View style={styles.witiPicture}>
          <LocalImage
          source={require('../pictures/witioo1.png')}
          originalWidth={1366}
          originalHeight={768}
          />
        </View>
        <View style={styles.witiTextContainer}>
          <Text style={styles.witiTitle}>
            Code of Ethics & Values
          </Text>
          <Text style={styles.witiText}>
            Joining the solidarity movement requires sharing a same set of values and ethics.
            </Text>
            <Text style={styles.witiText}>
            Please read the following Code of Ethics to ensure you agree to all the principals
          </Text>
          <Text style={styles.witiText}>
          Joining the solidarity community is also a responsability.  There are three simple laws that bind members to a moral contract with the community.
          </Text>
          <Text style={styles.witiText}>
          If breached, the community has the capability to banish non compliant memebers from witioo.
          </Text>
       </View>
    <View style={styles.witiNav}>
    <TouchableOpacity onPress={() => { Actions.lawOne(); }}>
    <Text style={styles.witiSorry}>Sorry, no can do </Text>
    </TouchableOpacity>
       <View style={styles.witiBar}>
       </View>
		     <TouchableOpacity onPress={() => { Actions.lawOne({ ethicsAgree: this.state.ethicsAgree }); }}>
           <Text style={styles.buttonText}>
		         I Agree </Text>
           <Text style={styles.buttonText2}>
             count me in
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
    flex: 1,
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
    width: 250
  },
  title: {
  	marginLeft: 20,
  	fontSize: 20
  },
  witiTitle: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    color: '#666666',
  },
  witiTextContainer: {
    flex: 4,
    paddingTop: 20,
    paddingRight: 8,
    paddingLeft: 8,
    justifyContent:'flex-end'
  },
  witiText: {
    color: '#666666',
    fontSize: 11,
    paddingBottom: 5,
    paddingTop: 5,
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

export default Home;
