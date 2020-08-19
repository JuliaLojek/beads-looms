import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/StackNav";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";

interface HomeProps {
  navigation: StackNavigationProp<StackParamList, "Home">;
}

const defaultProjectData = {
  key: "001",
  name: "test",
  structure: [
    ["#ff2277", "#ff8877", "#552277"],
    ["#ccee22", "#aa3344", "#ff2244"],
    ["#9900aa", "#bcaed4", "#15feb1"],
  ],
  shift: false,
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const buttonPressHandler = () => {
    navigation.navigate("Project", defaultProjectData);
  };

  return (
    <View style={styles.main}>
      <Text>Główna!</Text>
      <Button title="nowy projekt" onPress={buttonPressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
