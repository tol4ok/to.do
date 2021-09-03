import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { tColor } from './Template'
import { Header } from './src/Header';
import { IList } from './types';
import { Input } from './src/Input';
import { ListItem } from './src/ListItem';


export default function App() {

  const [clicked, setClicked] = useState(false)
  const [input_Text, setInput_Text] = useState("");
  const [todo, setTodo] = useState<IList[]>([]);
  const [superId, setSuperId] = useState(0)

  useEffect(() => {
    setSuperId(superId + 1);
  }, [todo])

  const onClick = useCallback(() => {
    setClicked(true);
  }, [clicked])

  const input = useCallback((prop: string) => {
    setInput_Text(prop);
    // console.log(input_Text);
  }, [])

  const saveInput = useCallback(() => {
    const newTodo: IList[] = [
      ...todo,
      {
        text: input_Text,
        id: superId,
    },
  ];

  setTodo(newTodo);

  // console.log(todo);

  }, [input_Text, todo])

  return (
    <View style={styles.container}>
      <Header onClick={onClick}/>
      <Input onChange={(text) => input(text)} onEditing={saveInput} isClicked={clicked}/>
      <ListItem items={todo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tColor.background,
  },
});
