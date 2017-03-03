import React from 'react';

import Front from './components/Front';
import Home from './components/Home';
import LawOne from './components/LawOne';
import LawTwo from './components/LawTwo';
import LawThree from './components/LawThree';
import SignUp from './components/SignUp';
import InterPref from './components/InterPref';
import DevPref from './components/DevPref';
import WitiMap from './components/WitiMap';
import Map2 from './components/Map2';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

class App extends React.Component {
	render() {

		return (
          <Router>
            <Scene key='root' hideNavBar={true}>
            <Scene key='front' component={Front} title='Front Page'/>
            <Scene key='home' component={Home} title='Home'/>
            <Scene key='lawOne' component={LawOne} title='Law #1'/>
            <Scene key='lawTwo' component={LawTwo} title='Law #2'/>
            <Scene key='lawThree' component={LawThree} title='Law #3'/>
            <Scene key='signUp' component={SignUp} title='Sign Up'/>
            <Scene key='interPref' component={InterPref} title='Intervention Preferences'/>
            <Scene key='devPref' component={DevPref} title='Device Preferences'/>
            <Scene key='witiMap' component={WitiMap} title='markup'/>
            <Scene key='map2' component={Map2} title='markup'/>
            </Scene>
          </Router>
	    );
	}
}

export default App;
