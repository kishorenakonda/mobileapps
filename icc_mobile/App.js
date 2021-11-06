import React, { Component } from 'react'
import {
  View, StyleSheet, AppRegistry
} from 'react-native'
import { WebView } from 'react-native-webview'

export default class WebviewComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: "https://ipcloud.tatacommunications.com/catalyst-v4/#/redirect?mobile=true" }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

AppRegistry.registerComponent('App', () => WebviewComponent)  