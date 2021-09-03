
import React, {FC} from 'react';
import { Text } from 'react-native';


// import { styles } from "./ListItem.styles";
import { IList } from '../../types';

interface IListItemProps {
  items: IList[];
}

export const ListItem:FC<IListItemProps> = ({items}) => {
  return(
    <>
      {items.map((item) => (
        <>
          <Text>{item.text}</Text>
        </>
      ))}
    </>
  )
}