import React, { FC, useState, useEffect, useRef } from 'react';
import { TextInput, View, Animated } from 'react-native';

import { styles } from "./Input.styles";

interface InputProps {
  edited?: boolean;
  isClicked?: boolean;
  onChange?: (value: string) => unknown;
  onEditing?: (value: string) => unknown;
}

export const Input: FC<InputProps> = (props) => {
  const transition = useRef(new Animated.Value(-350)).current;

  const {
    isClicked,
    onChange,
    onEditing,
    edited,
  }: InputProps = {
    ...defaultProps,
    ...props,
  };

  useEffect(() => {
    if (isClicked) {
      Animated.timing(transition, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }

    if (!isClicked) {
      Animated.timing(transition, {
        toValue: -350,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [isClicked])

  // const transit = transition.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["0px", "45px"],
  // })

  return (
    <>
      <Animated.View style={{
        alignItems: "center",
        transform: [{translateX: transition}]
      }}><TextInput placeholder={"Сходить в магазин"} clearTextOnFocus={edited} onChangeText={(text) => onChange(text)} onEndEditing={() => onEditing("")} style={styles.input}/></Animated.View>
    </>
  )

}

const defaultProps: Required<InputProps> = {
  isClicked: false,
  edited: false,
  onChange: () => {},
  onEditing: () => {},
}