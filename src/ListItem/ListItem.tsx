
import React, { FC, Fragment } from 'react';
import { Text, TouchableHighlight, TextInput, Button, Pressable, Image } from 'react-native';


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
        <Fragment key={item.id}>

            {/* <Image 
              style = {styles.image}
              source = { require('../../assets/check-square-regular.png') }
            /> */}
          <Pressable onPress = {() => onQuickPress("")} onLongPress={() => onPress(item.id)}>
            <TextInput
            onChangeText={(text) => onChangeText(text)}
            onEndEditing={() => onEdit(item)}
            // editable={editable}
            style={!editable && styles.textinput}
            defaultValue={item.text}>
            </TextInput>
            <Text style={editable && styles.textinput}>{item.text}</Text>
          </Pressable> 
        </Fragment>
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