import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import "react-native-get-random-values";
import { nanoid } from 'nanoid'

import { tColor } from './src/Template';
import { Header } from './src/Header';
import { IList } from './types';
import { Input } from './src/Input';
import { ListItem } from './src/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

  const [newInput_text, setNewInput_text] = useState("");
  const [input_Text, setInput_Text] = useState("");
  const [editable, setEditable] = useState(false);
  const [todo, setTodo] = useState<IList[]>([]);
  const [clicked, setClicked] = useState(false)
  const [edited, setEdited] = useState(false);

  const saveData = async(data: IList[]) => {
    try {
      await AsyncStorage.setItem("todo", JSON.stringify(data));
      console.log("ew")
    } catch(err) {
      console.log("err");
    }
  }

  const getData = async() => {
    try {
      const data = AsyncStorage.getItem("todo");
      return data
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodo();
  }, [])

  const fetchTodo = async() => {
    const dataZ = await getData();
    if(dataZ) {
      console.log(dataZ);
      setTodo(JSON.parse(dataZ) || "[]");
    };
  }
  
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
  console.log("saveInput", newTodo);

  setEdited(true);

  saveData(newTodo);

  }, [input_Text, todo])

  const deleteTodo = useCallback((id) => {
    const newTodos = todo.filter((todos) => todos.id !== id);
    setTodo(newTodos);
    saveData(newTodos);
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
    saveData(newTodo);
    console.log(todo[0]);
  }, [newInput_text, editable, todo])

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
        onEditing={() => {
          saveInput();
        }}
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
