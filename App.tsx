import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { tColor } from './Template'
import { Header } from './src/Header';
import { useCallback } from 'react';

import { Input } from './src/Input';
import { useState } from 'react';

export default function App() {

  const [clicked, setClicked] = useState(false)

  const onClick = useCallback(() => {
    setClicked(true);
  }, [clicked])

  return (
    <View style={styles.container}>
      <Header onClick={onClick}/>
      <Input isClicked={clicked}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tColor.background,
  },
});
