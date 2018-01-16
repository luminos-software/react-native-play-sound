import {
  Platform,
  NativeModules,
} from 'react-native';

const { SoundModule } = NativeModules;

module.exports = {
  PlaySound :PlaySound = sound => {
    const nativeModules = require('react-native').NativeModules;
    Platform.OS === 'ios'
      ? nativeModules.SoundModule.playSound(sound)
      : NativeModules.SoundManager.playSound(sound)
  },
  StopSound :StopSound = () => {
    const nativeModules = require('react-native').NativeModules;
    Platform.OS === 'ios'
      ? nativeModules.SoundModule.stopSound()
      : NativeModules.SoundManager.stopSound()
  }
};
