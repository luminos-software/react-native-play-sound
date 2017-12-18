import {
  Platform,
  NativeModules,
} from 'react-native';

const { SoundModule } = NativeModules;

export default PlaySound = sound => {
  const nativeModules = require('react-native').NativeModules
  Platform.OS === 'ios'
    ? nativeModules.SoundModule.playSound(sound)
    : NativeModules.SoundManager.playSound(sound)
};

