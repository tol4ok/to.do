import React from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { useCallback } from "react";
import { FC } from "react";

import { styles } from "./Input.styles";

interface InputProps {
  isClicked?: boolean;
}

export const Input: FC<InputProps> = (props) => {

  const {
    isClicked,
  }: InputProps = {
    ...defaultProps,
    ...props,
  };

  return (
    <>
      {isClicked && <TextInput style={styles.input}/>}
    </>
  )


}

const defaultProps: Required<InputProps> = {
  isClicked: false,
}