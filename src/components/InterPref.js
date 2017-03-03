import React from 'react';

import LocalImage from './LocalImage'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Image
} from 'react-native';

import {
	Actions,
}from 'react-native-router-flux';

class InterPref extends React.Component {

  constructor(props) {
    super(props);
    this.state = {trueSwitchIsOn: true};
    this.state = {falseSwitchIsOn: false};
    this.state = {speakerphoneSwitchIsOn: true};
    this.state = {speakerphoneSwitchIsOn: false};
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
      <Text style={styles.witiTitle}>
          Intervention Preferences
      </Text>
      <View style={styles.witiToggle}>
        <View style={styles.witiToggleText}>
        <Text style={styles.witiToggleTitle}>
          Police Siren
        </Text>
        <Text style={styles.witiText}>
          Allow responders to make my phone play a Police Siren
        </Text>
      </View>
      <View style={styles.witiToggleSwitch}>
        <Switch
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          style={{marginBottom: 10}}
          value={this.state.falseSwitchIsOn} />
      </View>
  </View>
  <View style={styles.witiToggle}>
      <View style={styles.witiToggleText}>
          <Text style={styles.witiToggleTitle}>
            Speakerphone
          </Text>
          <Text style={styles.witiText}>
          Allow responders to listen and talk through my Speakerphone
          </Text>
      </View>
      <View style={styles.witiToggleSwitch}>
          <Switch
            onValueChange={(value) => this.setState({speakerphoneSwitchIsOn: value})}
            onTintColor="#00ff00"
            thumbTintColor="#0000ff"
            tintColor="#ff0000"
            style={{marginBottom: 10}}
            value={this.state.speakerphoneSwitchIsOn} />
      </View>
  </View>
  <View style={styles.witiToggle}>
      <View style={styles.witiToggleText}>
          <Text style={styles.witiToggleTitle}>
            Sync Device
          </Text>
          <Text style={styles.witiText}>
          Click the image or skip
          </Text>
      </View>
      <View style={styles.witiToggleSwitch}>
          <View style={styles.witiToggleOrderButton}>
             <TouchableOpacity onPress={() => { Actions.DevPref({ name: this.state.name }); }}>
 		           <Text style={styles.witibuttonText}>
 		             Order Now
               </Text>
 		         </TouchableOpacity>
          </View>
      </View>
  </View>
  <View style={styles.witiDeviceIcon}>
    <Image source={require('../icons/device.png')} style={{width: 100, height: 100}} />
  </View>
	<View style={styles.witiNav}>
  <TouchableOpacity onPress={() => { Actions.front({ name: this.state.name }); }}>
  <Text style={styles.witiSorry}>Cancel Sign Up </Text>
  </TouchableOpacity>
     <View style={styles.witiBar}></View>
		     <TouchableOpacity onPress={() => { Actions.devPref({ name: this.state.name }); }}>
		       <Text style={styles.buttonText}>
		         That is it</Text>
           <Text style={styles.buttonText2}>
             Good to go
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
    alignItems: 'center',
  },
  witiDeviceIcon: {
    alignSelf: 'center',
  },
  witiNav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
    paddingLeft: 8,
    paddingRight: 8
  },
  witiTextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
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
  witiToggle: {
    flex: 1,
    flexDirection: 'row',
  },
  witiToggleText: {
    flex: 2
  },
  witiToggleSwitch: {
    flex:1
  },
  witiToggleTitle: {
    paddingLeft: 15,
		paddingRight: 15,
    fontSize: 18,
    color: '#666666',
  },
  witiToggleOrderButton: {
    height: 22,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    paddingRight: 10,
  },
  witibuttonText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
});

export default InterPref;
