
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
}

export const ListItem:FC<IListItemProps> = (props) => {

  const {
    items,
    onPress,
    editable,
    onEdit,
    onChangeText,
  }: IListItemProps = {
    ...defaultProps,
    ...props,
  };

  return(
    <>
      {items.map((item) => (
        <Fragment key={item.id}>
          <TextInput
            onChangeText={(text) => onChangeText(text)}
            onEndEditing={() => onEdit(item)}
            editable={editable}
            defaultValue={item.text}>
          </TextInput>
          {/* <Button
            
            title="Удалить"
          /> */}
          <Pressable onPress={() => onPress(item.id)}>
            <Image 
              style = {styles.image}
              source = { require('../../assets/check-square-regular.png') }
            />
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
}