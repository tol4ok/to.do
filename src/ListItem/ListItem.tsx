
import React, { FC, Fragment, useCallback, useRef } from 'react';
import { Text, TouchableHighlight, TextInput, Button, Pressable, Image, View } from 'react-native';


import { styles } from "./ListItem.styles";
import { IList } from '../../types';

interface IListItemProps {
  items: IList[];
  editable?: boolean;
  onPress?: (id: string) => unknown;
  onEdit?: (item: IList) => unknown;
  onChangeText?: (value: string) => unknown;
  onQuickPress?: (value: string) => unknown;
}

export const ListItem:FC<IListItemProps> = (props) => {

  const {
    items,
    onPress,
    editable,
    onEdit,
    onChangeText,
    onQuickPress,
  }: IListItemProps = {
    ...defaultProps,
    ...props,
  };

  return(
    <>
      {items.map((item) => (
        <View style={styles.component} key={item.id}>
          <Pressable style={styles.pressable} onPress = {() => onQuickPress("")} onLongPress={() => {
            onPress(item.id);
            }}>
            <TextInput
            onChangeText={(text) => onChangeText(text)}
            onEndEditing={() => onEdit(item)}
            // editable={editable}
            style={!editable ? styles.textinput : styles.input}
            defaultValue={item.text}>
            </TextInput>
            <Text style={editable ? styles.textinput : styles.input}>{item.text}</Text>
          </Pressable>
        </View>
      ))}
    </>
  )
}

const defaultProps: Required<IListItemProps> = {
  items: [],
  editable: false,
  onEdit: () => {},
  onPress: () => {},
  onChangeText: () => {},
  onQuickPress: () => {},
}