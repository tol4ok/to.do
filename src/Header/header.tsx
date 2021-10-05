import React, {useCallback, FC, useState} from 'react';
import { useRef } from 'react';
import { Button, Pressable, View, Text, Animated } from 'react-native';


import { styles } from "./header.styles";


interface HeaderProps {
  onClick?: (value: string) => unknown;
  onPress?: (value: string) => unknown;
  clicked?: boolean;
}

export const Header: FC<HeaderProps> = (props): JSX.Element => {
  const [rotateValue] = useState(new Animated.Value(0));
  const [backValue, setBackValue] = useState(false);
  const {
    onClick,
    onPress,
    clicked,
  }: HeaderProps = {
    ...defaultProps,
    ...props,
  }

  const rotateFunc = useCallback(() => {
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setBackValue(true);
  }, [])

  const rotateFuncBack = useCallback(() => {
    Animated.timing(rotateValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setBackValue(false);
  }, [])

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  })

    return (
      <View style={styles.header}>
        <Pressable
          onPress={() => {
          onClick("");
          !backValue && rotateFunc();
          backValue && rotateFuncBack();
          }}
        ><Animated.Text style={{
          fontSize: 40,
          color: "#1D57F6",
          transform: [{rotate: rotate}]
        }}>+</Animated.Text>
        </Pressable>
      </View>
    );


}

const defaultProps: Required<HeaderProps> = {
  onClick: () => {},
  onPress: () => {},
  clicked: false,
}