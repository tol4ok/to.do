import { styles } from "./header.styles";

import React from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useCallback } from "react";
import { FC } from "react";

export const Header: FC = (): JSX.Element => {
  const test = useCallback(() => {console.log("aboba")}, [])

    return (
      <View style={styles.header}>
        <Button onPress={test} title="Править" />
        <Button title="+" onPress={test} />
      </View>
    );


}