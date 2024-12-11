import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AddTarget from "./AddTarget";

const TargetList = ({ navigation }) => {
  const aims = useSelector((state) => state.focus.Targets);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TargetList</Text>
      <FlatList
        data={aims}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.target}>
            <Text>{item.text}</Text>
            <Button
              title="Edit"
              onPress={() => navigation.navigate("EditTarget", { id: item.id })}
            />
            <Button
              title="Delete"
              onPress={() =>
                navigation.navigate("DeleteTarget", { id: item.id })
              }
            />
          </View>
        )}
      />
      <Button
        title="Add more Targets"
        onPress={() => navigation.navigate(AddTarget)}
      />
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
  target: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default TargetList;
