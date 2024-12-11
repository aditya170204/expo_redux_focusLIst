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
            <Text style={styles.targetText}>{item.text}</Text>
            <View
              style={{
                // justifyContent: "space-evenly",
                flexDirection: "row",
                margin: 30,
                width: "45%",
                gap: 10,
                // backgroundColor: "red",
                // padding: 10,
                // borderRightColor,
              }}
            >
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() =>
                  navigation.navigate("EditTarget", { id: item.id })
                }
              />
              <Button
                title="Delete"
                onPress={() =>
                  navigation.navigate("DeleteTarget", { id: item.id })
                }
                color={"#B02E0C"}
              />
            </View>
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
    backgroundColor: "grey",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  target: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 13,
    backgroundColor: "#000001",
    alignItems: "center",
    borderRadius: 20,
  },
  targetText: {
    color: "white",
    fontSize: 17,
    width: "55%",

    // backgroundColor: "yellow",
    padding: 10,
  },
  editButton: {
    // marginRight:
  },
  deleteButton: {},
});

export default TargetList;
