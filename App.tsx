import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/StackNav";
import Home from "./screens/Home";
import Project from "./screens/Project";
import NavHeader from "./navigation/NavHeader";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Beads&Looms",
            headerStyle: { backgroundColor: "pink" },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Project"
          component={Project}
          options={(props) => {
            return {
              header: () => (
                <NavHeader navigation={props.navigation} route={props.route} />
              ),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
