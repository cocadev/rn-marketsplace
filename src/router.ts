import React, { PureComponent } from 'react'

import { KeyboardAvoidingView, Platform, AsyncStorage } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import { Font } from 'expo'

import Login from './screens/Login/login';
import Map from './screens/Login/map';
import Main from './screens/Login/main';
import Signup from './screens/Login/signup';
import Flow13 from './screens/Login/flow13';
import Flow14 from './screens/Login/flow14';
import Flow23 from './screens/Login/flow23';
import List from './screens/Login/list';
import Flow24 from './screens/Login/flow24';
import Flow25 from './screens/Login/flow25';
import Flow26 from './screens/Login/flow26';
import Flow27 from './screens/Login/flow27';
import Flow28 from './screens/Login/flow28';
import Flow29 from './screens/Login/flow29';
import Flow299 from './screens/Login/flow299';

export default class  App extends PureComponent {

  state = {
    fontLoaded: false,
    initial: false,
    map: false
  };

  async componentDidMount() {
    await this._loadAssets();
    // this._retrieveData()

  }

  _retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // We have data!!
        console.log('token', token);
        this.setState({initial:true, map: true})
      } else {
        this.setState({initial:true})
        console.log('token no');

      }
    } catch (error) {
      // Error retrieving data
      console.log('eeeeeeeeee', error);
      this.setState({initial:true})
    }
  };

  async _loadAssets() {
    await Font.loadAsync({

      'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
      'material-community': require('../assets/fonts/Montserrat-Light.ttf'),
      'ionicons': require('../assets/fonts/Montserrat-Light.ttf'),


    });
    console.log('fonts loaded!');
    this.setState({ fontLoaded: true });
  }
  render() {

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}>
        {this.state.fontLoaded == true ?

          <Router>
            <Scene>
              <Scene key="main" component={Main} initial={false} hideNavBar/>
              <Scene key="login" component={Login} initial={false} hideNavBar/>
              <Scene key="signup" component={Signup} initial={false} hideNavBar/>


              <Scene key="flow13" component={Flow13} initial={false} hideNavBar/>
              <Scene key="flow14" component={Flow14} initial={false} hideNavBar/>

              <Scene key="flow23" component={Flow23} initial={false} hideNavBar/>
              <Scene key="flow24" component={Flow24} initial={false} hideNavBar/>
              <Scene key="flow25" component={Flow25} initial={false} hideNavBar/>
              <Scene key="flow26" component={Flow26} initial={false} hideNavBar/>
              <Scene key="flow27" component={Flow27} initial={false} hideNavBar/>
              <Scene key="flow28" component={Flow28} initial={false} hideNavBar/>
              <Scene key="flow29" component={Flow29} initial={false} hideNavBar/>
              <Scene key="flow299" component={Flow299} initial={false} hideNavBar/>

              <Scene key="list" component={List} initial={false} hideNavBar/>

              <Scene key="map" component={Map} initial={false} hideNavBar/>
            </Scene>
          </Router>
          : null}
      </KeyboardAvoidingView>
    );
  }
}
