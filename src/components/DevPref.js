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

class DevPref extends React.Component {

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
          source={require('../icons/device.png')}
					originalWidth={640}
          originalHeight={360}
          />
          </View>
          <Text style={styles.witiTitle}>
            Device Preferences
          </Text>
          <View style={styles.witiToggle}>
          <View style={styles.witiToggleText}>
          <Text style={styles.witiToggleTitle}>
            Light
          </Text>
          <Text style={styles.witiText}>
          Allow the device to blink when in Alert Mode
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
            Cellular Alarm
          </Text>
          <Text style={styles.witiText}>
          Automatically play Police Siren when sending an Alert
          </Text>
          </View>
          <View style={styles.witiToggleSwitch}>
          <Switch
          onValueChange={(value) => this.setState({speakerphoneSwitchIsOn: value})}
          style={{marginBottom: 10}}
          value={this.state.speakerphoneSwitchIsOn} />
          </View>
          </View>
          <View style={styles.witiToggle}>
          <View style={styles.witiToggleText}>
          <Text style={styles.witiToggleTitle}>
            Send Alarm
          </Text>
          <Text style={styles.witiText}>
          To ensure no distress calls are sent by mistake, witioo requires a precise sequence to follow
          </Text>
          <View style={styles.witiTestButton}>
          <Text style={styles.witiTestButtonText}>Test Drive Device </Text>
          </View>
          </View>
          </View>
					<View style={styles.witiNav}>
            <TouchableOpacity onPress={() => { Actions.front({ name: this.state.name }); }}>
              <Text style={styles.witiSorry}>Cancel Sign Up </Text>
            </TouchableOpacity>
           <View style={styles.witiBar}></View>
		       <TouchableOpacity onPress={() => { Actions.witiMap({ name: this.state.name }); }}>
		         <Text style={styles.buttonText}>
		           Tested & Approved</Text>
             <Text style={styles.buttonText2}>
             I know what I have to do
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
    height: 125
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
    flex:1,
    backgroundColor: '#ffffff'
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
  witiTestButton: {
    height: 22,
    borderColor: 'gray',
    borderWidth: 1,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#CCC',
    alignSelf: 'center',
  },
  witiTestButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default DevPref;
