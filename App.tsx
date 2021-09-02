import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { tColor } from './Template'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>
        BRUH
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tColor.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#1ff'
  }
});
