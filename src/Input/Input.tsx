import React, { FC } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from "./Input.styles";

interface InputProps {
  edited?: boolean;
  isClicked?: boolean;
  onChange?: (value: string) => unknown;
  onEditing?: (value: string) => unknown;
}

export const Input: FC<InputProps> = (props) => {

  const {
    isClicked,
    onChange,
    onEditing,
    edited,
  }: InputProps = {
    ...defaultProps,
    ...props,
  };

  return (
    <>
      {isClicked && <View style={styles.box}><TextInput placeholder={"Сходить в магазин"} clearTextOnFocus={edited} onChangeText={(text) => onChange(text)} onEndEditing={() => onEditing("")} style={styles.input}/></View>}
    </>
  )

}

const defaultProps: Required<InputProps> = {
  isClicked: false,
  edited: false,
  onChange: () => {},
  onEditing: () => {},
}