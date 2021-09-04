import React, {useCallback, FC} from 'react';
import { Button, View } from 'react-native';


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
        <Button
          onPress={() => onPress("")}
          title="Править"
        />
        <Button
          title="+"
          onPress={() => onClick("")}
        />
      </View>
    );


}

const defaultProps: Required<HeaderProps> = {
  onClick: () => {},
  onPress: () => {},
}