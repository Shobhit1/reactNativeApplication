import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from './style'

class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>UserName</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    )
  }
}

export default LoginView
