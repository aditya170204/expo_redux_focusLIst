import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Provider } from "react-redux";
import TargetList from "./src/Component/TargetList";
import AddTarget from "./src/Component/AddTarget";
import EditTarget from "./src/Component/EditTarget";
import DeleteTarget from "./src/Component/DeleteTarget";
import store from "./src/Redux/Store";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TargetList">
          <Stack.Screen name="AddTarget" component={AddTarget} />
          <Stack.Screen name="TargetList" component={TargetList} />
          <Stack.Screen name="EditTarget" component={EditTarget} />
          <Stack.Screen name="DeleteTarget" component={DeleteTarget} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
