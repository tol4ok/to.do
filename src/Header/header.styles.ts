import { StyleSheet } from "react-native";
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
  },
  textHover: {
    opacity: 0.7,
  }
});