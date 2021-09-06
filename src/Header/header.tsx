import React, {useCallback, FC} from 'react';
import { Button, Pressable, View, Text } from 'react-native';


import { styles } from "./header.styles";


interface HeaderProps {
  onClick?: (value: string) => unknown;
  onPress?: (value: string) => unknown;
}

export const Header: FC<HeaderProps> = (props): JSX.Element => {
  const test = useCallback(() => {console.log("aboba")}, [])
  const {
    onClick,
    onPress,
  }: HeaderProps = {
    ...defaultProps,
    ...props,
  }

    return (
      <View style={styles.header}>
        {/* <Button
          onPress={() => onPress("")}
          title="Править"
        /> */}
        <Pressable
          onPress={() => onClick("")}
        ><Text>+</Text></Pressable>
      </View>
    );


}

const defaultProps: Required<HeaderProps> = {
  onClick: () => {},
  onPress: () => {},
}