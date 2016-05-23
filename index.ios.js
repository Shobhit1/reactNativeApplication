import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native'
// import MapView from './pages/MapView/'
import LoginView from './pages/LoginView/'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontWeight: '500',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
class MobileApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        barTintColor="rgba(68,108,179, 0.5)"
        initialRoute={{
          title: 'ECONVE',
          component: LoginView
        }}
      />
    )
  }
}
AppRegistry.registerComponent('MobileApp', () => MobileApp)
