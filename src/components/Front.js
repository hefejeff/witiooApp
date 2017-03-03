import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  MapView
} from 'react-native';

import {
	Actions,
}from 'react-native-router-flux';

const {width, height} = Dimensions.get('window')

class Front extends React.Component {

  constructor(props) {
  super(props)
	this.state = {
    latitude: null,
    longitude: null,
    latitudeDelta: null,
    longitudeDelta: null,
	}
}
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
      <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion= {this.state.region}
     />
     <View style={styles.witiOverlay}>
     <Text style ={styles.overlayText}>
     Overlay Text
     </Text>
     </View>
     </View>
      <View style={styles.witiSignupSection}>
      	<TouchableOpacity onPress={() => { Actions.home({ name: this.state.name }); }}>
            <Text style={styles.buttonText}>
      		      Sign me up!
            </Text>
      	</TouchableOpacity>
     </View>
    </View>
	    );
    }
}

var styles = StyleSheet.create({
  witiOverlay: {
    position: 'absolute',
    height: 200,
    top: 20,
    left: 0,
    right: 0
  },
  overlayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000'
  },
  map:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  witiContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  mapContainer: {
    flex: 1,
    width: width
  },
  witiPicture: {
    flex: 1,
    alignItems: 'center',
  },
  witiNav: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
  witiSection: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  witiSignupSection: {
    justifyContent: 'center',
    width: width,
    height: 60,
    backgroundColor:'#000000'
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
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    color: '#666666',
  },
  witiTextContainer: {
    paddingTop: 20,
    paddingRight: 8,
    paddingLeft: 8,
  },
  witiText: {
    color: '#666666',
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
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFF',
  },
  buttonText2: {
    paddingTop: 2,
    textAlign: 'center',
    color: '#666666',
  },
});

export default Front;
