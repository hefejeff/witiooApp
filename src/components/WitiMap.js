import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  MapView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
	Actions,
}from 'react-native-router-flux';

const {width, height} = Dimensions.get('window')

const leftFooterText = "I'm Coming"
const rightFooterText = "Not"

class WitiMap extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    latitudeDelta: null,
    longitudeDelta: null
  };

  calcDelta(lat, lon, accuracy){
    const oneDegreeOfLongitudInMeters = 111.32;
    const circumference = (40075 / 360)

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference))
    const lonDelta = (accuracy / oneDegreeOfLongitudInMeters)

    this.setState({
      region: {
        latitude: lat,
        longitude: lon,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta
      },
      annotations: [{
            longitude: -84.99343,
            latitude: 9.934132,
          },
          {
            longitude: -84.92343,
            latitude: 9.974132,
          }],
      })
  };



  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const accuracy = position.coords.accuracy
        this.calcDelta(lat, lon, accuracy)
      }
    )
  }

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
      00:43
      </Text>
      </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={this.state.region}
        showsUserLocation={true}
        annotations={this.state.annotations}
     />
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
    fontSize: 36,
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