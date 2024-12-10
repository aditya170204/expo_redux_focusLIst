import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTarget } from "../Redux/TargetSlice";

const AddTarget = ({ navigation }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTarget(text));
      navigation.navigate("TargetList");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AddTarget</Text>
      <TextInput
        style={styles.input}
        placeholder="Add your Target"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default AddTarget;
