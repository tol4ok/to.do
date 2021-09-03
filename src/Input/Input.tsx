import React, { FC } from 'react';
import { TextInput } from 'react-native';

import { styles } from "./Input.styles";

interface InputProps {
  isClicked?: boolean;
  onChange?: (value: string) => unknown;
  onEditing?: (value: string) => unknown;
}

export const Input: FC<InputProps> = (props) => {



  const {
    isClicked,
    onChange,
    onEditing,
  }: InputProps = {
    ...defaultProps,
    ...props,
  };

  return (
    <>
      {isClicked && <TextInput onChangeText={(text) => onChange(text)} onEndEditing={() => onEditing("")} style={styles.input}/>}
    </>
  )


}

const defaultProps: Required<InputProps> = {
  isClicked: false,
  onChange: () => {},
  onEditing: () => {},
}