import { styles } from "./header.styles";

import React from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useCallback } from "react";
import { FC } from "react";

interface HeaderProps {
  onClick?: (value: string) => unknown; 
}

export const Header: FC<HeaderProps> = (props): JSX.Element => {
  const test = useCallback(() => {console.log("aboba")}, [])
  const {
    onClick,
  }: HeaderProps = {
    ...defaultProps,
    ...props,
  }

    return (
      <View style={styles.header}>
        <Button onPress={test} title="Править" />
        <Button title="+" onPress={() => onClick("")} />
      </View>
    );


}

const defaultProps: Required<HeaderProps> = {
  onClick: () => {},
}