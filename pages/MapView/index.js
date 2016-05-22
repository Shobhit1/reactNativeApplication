import React, { Component } from 'react'
import { MapView } from 'react-native'

import styles from './style'

class MapViewComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialPosition: '',
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = JSON.stringify(position)
        this.setState({ initialPosition })
      },
      (error) => alert(error.message), //eslint-disable-line
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }
  render() {
    return (
      <MapView
        style={styles.map}
        showsUserLocation
        followUserLocation
      />
    )
  }
}

export default MapViewComp
