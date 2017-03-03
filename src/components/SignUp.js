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

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.state = {cell: ''};
  }
	render() {
		return(
      <View style={styles.witiContainer}>
        <View style={styles.witiPicture}>
          <LocalImage
          source={require('../pictures/highfive4.png')}
					originalWidth={1366}
          originalHeight={437}
          />
          </View>
          <Text style={styles.witiText}>
          Welcome to the movement {"\n"}
          the most secure and private {"\n"}
          community in existance.
					</Text>
          <Text style={styles.witiText}>
          Please provide your 3 basic info:
          </Text>
          <View style={styles.witiTextInputView}>
          <TextInput
             style={styles.witiTextInput}
             placeholder="First Name (only)"
             onChangeText={(name) => this.setState({name})}
           />
           <TextInput
              style={styles.witiTextInput}
              placeholder="Cellular Phone"
              onChangeText={(cell) => this.setState({cell})}
            />
            </View>
					<View style={styles.witiNav}>
            <TouchableOpacity onPress={() => { Actions.front({ name: this.state.name }); }}>
            <Text style={styles.witiSorry}>Cancel Sign Up </Text>
            </TouchableOpacity>
     <View style={styles.witiBar}></View>
		     <TouchableOpacity onPress={() => { Actions.interPref({ name: this.state.name }); }}>
		       <Text style={styles.buttonText}>
		         Sign Up </Text>
           <Text style={styles.buttonText2}>
             almost done
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 10
  },
  witiTextInputView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 8,
    paddingRight: 8,
  },
  witiTextInput: {
    height: 40,
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15
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
    fontSize: 18,
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
    alignItems: 'center',
    justifyContent: 'center',
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

export default SignUp;
