import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTarget } from "../Redux/TargetSlice";

const EditTarget = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const aim = useSelector((state) => {
    return state.focus.Targets.find((aim) => aim.id === id);
  });
  const [text, setText] = useState(aim ? aim.text : "");
  const handleEdit = () => {
    if (text.trim()) {
      dispatch(editTarget({ id, text }));
      navigation.navigate("TargetList");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>EditTarget</Text>
      <TextInput
        style={styles.input}
        placeholder="Edit your target"
        value={text}
        onChangeText={setText}
      />
      <Button title="update" onPress={handleEdit} />
    </View>
  );
};

export default EditTarget;

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
