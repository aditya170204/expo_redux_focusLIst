import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTarget } from "../Redux/TargetSlice";

const DeleteTarget = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const aim = useSelector((state) =>
    state.focus.Targets.find((aim) => aim.id === id)
  );

  const handleDelete = () => {
    dispatch(deleteTarget(id));
    navigation.navigate("TargetList");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>DeleteTarget</Text>
      {aim && <Text>Are you sure you want to delete "{aim.text}"?</Text>}

      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, marginBottom: 20 },
});

export default DeleteTarget;
