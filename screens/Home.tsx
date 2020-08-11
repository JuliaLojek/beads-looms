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

const Home: React.FC<HomeProps> = ({ navigation }) => {

  const buttonPressHandler = () => {
    navigation.navigate("Project", { id: 40 });
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
