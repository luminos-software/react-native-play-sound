/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { PlaySound, StopSound } from 'react-native-play-sound';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => PlaySound('jingle_bells_keyboard')}
            style={styles.touchable}
          >
            <Text>Play Jingle Bell</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stopContainer}>
          <TouchableOpacity
            onPress={() => StopSound()}
            style={styles.touchable}
          >
            <Text>Stop Jingle Bell</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  stopContainer: {
    height: 100,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  touchable: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
});
