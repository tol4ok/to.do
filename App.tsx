import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import "react-native-get-random-values";
import { nanoid } from 'nanoid'

import { tColor } from './src/Template';
import { Header } from './src/Header';
import { IList } from './types';
import { Input } from './src/Input';
import { ListItem } from './src/ListItem';


export default function App() {

  const [newInput_text, setNewInput_text] = useState("");
  const [input_Text, setInput_Text] = useState("");
  const [editable, setEditable] = useState(false);
  const [todo, setTodo] = useState<IList[]>([]);
  const [clicked, setClicked] = useState(false)
  const [edited, setEdited] = useState(false);
  
  const onClick = useCallback(() => {
    setClicked(!clicked);
  }, [clicked])

  const onPressed = useCallback(() => {
    setEditable(!editable);
  }, [editable])

  const input = useCallback((prop: string) => {
    setInput_Text(prop);
    setEdited(false);
  }, [])

  const newInput = useCallback((prop: string) => {
    setNewInput_text(prop);
  }, [])

  const saveInput = useCallback(() => {
    const newTodo: IList[] = [
      ...todo,
      {
        text: input_Text,
        id: nanoid(),
      },
    ];

  setTodo(newTodo);

  setEdited(true);

  }, [input_Text, todo])

  const deleteTodo = useCallback((id) => {
    const newTodos = todo.filter((todos) => todos.id !== id);
    setTodo(newTodos);
  }, [todo])

  const editTodo = useCallback((item) => {
    setEditable(!editable);
    const newItem = {
      text: newInput_text,
      id: item.id,
    };
    // console.log(newItem);
    const index = todo.findIndex(e => e.id === item.id);
    const before = todo.slice(0, index);
    const after = todo.slice(index + 1);
    const newTodo = [...before, newItem, ...after];
    setTodo(newTodo);
    console.log(todo);
  }, [newInput_text, editable])

  return (
    <View style={styles.container}>
      <Header
        // onPress={onPressed}
        onClick={onClick}
        clicked={clicked}
      />
      <Input
        edited={edited}
        onChange={(text) => input(text)}
        onEditing={saveInput}
        isClicked={clicked}
      />
      <ListItem
        onEdit={editTodo}
        editable={editable}
        onPress={deleteTodo}
        items={todo}
        onChangeText={(text) => newInput(text)}
        onQuickPress={onPressed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tColor.background,
  },
});
