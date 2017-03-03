import React, { Component } from 'react';

import {
  View,
  Text,
  ListView,
  StyleSheet,
  MapView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
	Actions,
}from 'react-native-router-flux';

const {width, height} = Dimensions.get('window')

class Map2 extends React.Component {


  constructor(props) {
    super(props)
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      title: '',
      dataSource: dataSource.cloneWithRows(['George', 'Tim', 'Ben']),
      isLoading: true,
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

  renderRow(rowData, sectionID, RowID) {

     return (
       <View style={styles.listCont}>
         <View style={styles.circle} />
         <View style={styles.textBox}>
          <Text style={styles.listItemText}  numberOfLInes={1}>{rowData}</Text>
          </View>
         </View>
     );
   }


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
    var CurrentView = <ListView style={styles.responderList} enableEmptySections={true} dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} />;
		return(
      <View style={styles.witiContainer}>
      <MapView
        style={styles.map}
        initialRegion={this.state.region}
        showsUserLocation={true}
        annotations={this.state.annotations}
     />
     <View style={styles.listContainer}>
     {CurrentView}
     </View>
     <View style={styles.mapFooter}>
     <View style={styles.mapFooterLeft}>
     <TouchableOpacity onPress={() => { Actions.lawOne(); }}>
     <Text style={styles.mapFooterTextLeft}>
     Camera
     </Text>
     </TouchableOpacity>
     </View>
     <View style={styles.mapFooterCenter}>
     <TouchableOpacity onPress={() => { Actions.lawOne(); }}>
     <Text style={styles.mapFooterTextCenter}>
     911
     </Text>
     </TouchableOpacity>
     </View>
     <View style={styles.mapFooterRight}>
     <TouchableOpacity onPress={() => { Actions.front(); }}>
     <Text style={styles.mapFooterTextRight}>
     Chat
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
  listContainer: {
    flex: 1
  },
  listCont: {
    height: 40,
    justifyContent: 'center',
  },
  responderList: {
    flex: 1,
    width: width,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  listItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 20,
  },
  listItemText: {
    height: 40,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,

  },
  listItemSeperator: {
    backgroundColor: '#cccccc',
    height: 1,
    paddingLeft: 5,
    paddingRight:5
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: 'blue'
  },
  textBox: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
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
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapFooterLeft: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapFooterCenter: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapFooterRight: {
    flex: 1,
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapFooterTextLeft: {
    color: 'white',
  },
  mapFooterTextCenter: {
    color: 'white',
  },
  mapFooterTextRight: {
    color: 'white',
  }

});

export default Map2;
