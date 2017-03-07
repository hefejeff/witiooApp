import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

import {
	Actions,
}from 'react-native-router-flux';

import MapView from 'react-native-maps';

var formatTime = require ('minutes-seconds-milliseconds');

const {width, height} = Dimensions.get('window')

const leftFooterText = "I'm Coming"
const rightFooterText = "Not"

class WitiMap extends React.Component {

constructor(props) {
    super(props)
  	this.state = {
      latitude: null,
      longitude: null,
      latitudeDelta: null,
      longitudeDelta: null,
      timeElapsed: null,
      latlng: null
  	}
}

componentDidMount() {
    var startTime = new Date();
    setInterval (() => {
      this.setState({
        timeElapsed: new Date() - startTime
      })
    }, 500);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const accuracy = position.coords.accuracy
        this.calcDelta(lat, lon, accuracy)
      }
    )
  }

calcDelta(lat, lon, accuracy){

    const ASPECT_RATIO = width / height
    const latDelta = 0.0922
    const lonDelta = latDelta * ASPECT_RATIO

    const fakeAlertLat = lat + .002
    const fakeAlertLon = lon + .002

    this.setState({
      region: {
        latitude: lat,
        longitude: lon,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta
      },
      latlng: {
        longitude: fakeAlertLon,
        latitude: fakeAlertLat
      }
      })
};

	render() {
		return(
      <View style={styles.witiContainer}>
      <View style={styles.header}>
      <View style={styles.headerLeft}>
      <Text style={styles.headerTextLeft}>
      120 mts South
      </Text>
      </View>
      <View style={styles.headerRight}>
      <Text style={styles.headerTextRight}>
      {formatTime(this.state.timeElapsed)}
      </Text>
      </View>
      </View>
      <MapView
        style={styles.map}
        region={this.state.region}
        showsUserLocation={true}
        followUserLocation = {true}
        zoomEnabled = {true}>
        <MapView.Marker
           coordinate={this.state.latlng}
           image={require('../icons/pinkDot2.png')}
           title={"title"}
           description={"description"}
        />
      </MapView>
     <View style={styles.mapFooter}>
     <View style={styles.mapFooterLeft}>
     <TouchableOpacity onPress={() => { Actions.map2(); }}>
     <Text style={styles.mapFooterTextLeft}>
     {leftFooterText}
     </Text>
     </TouchableOpacity>
     </View>
     <View style={styles.mapFooterRight}>
     <TouchableOpacity onPress={() => { Actions.front(); }}>
     <Text style={styles.mapFooterTextRight}>
     {rightFooterText}
     </Text>
     </TouchableOpacity>
     </View>
     </View>
     </View>
	    );
    }
}

var styles = StyleSheet.create({
  witiContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 2,
    width: width
  },
  header: {
    height: 70,
    backgroundColor: '#cccccc',
    paddingTop: 10,
    flexDirection: 'row'
  },
  headerLeft: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10
  },
  headerRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    paddingRight: 10
  },
  headerTextLeft: {
    fontSize: 20
  },
  headerTextRight: {
    fontSize: 32,
    color: 'red'
  },
  mapFooter: {
    height: 70,
    flexDirection: 'row'
  },
  mapFooterLeft: {
    height: 70,
    width: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapFooterRight: {
    width: 100,
    height: 70,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapFooterTextLeft: {
    fontWeight: 'bold',
    fontSize: 18
  },
  mapFooterTextRight: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }

});

export default WitiMap;
