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
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

interface HomeProps {
  navigation: StackNavigationProp<StackParamList, "Home">;
}

const defaultProjectData = {
  key: "001",
  name: "test",
  structure: [
    ["#ff2277", "#bcaed4", "#ff2277"],
    ["#bcaed4", "#ff2277", "#bcaed4"],
    ["#ff2277", "#bcaed4", "#ff2277"],
  ],
  shift: false,
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const buttonPressHandler = () => {
    navigation.navigate("Project", defaultProjectData);
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity
          style={globalStyles.button}
          onPress={buttonPressHandler}
        >
          <AntDesign
            name="pluscircle"
            size={22}
            style={globalStyles.smallIcon}
          />
          <Text style={globalStyles.smallText}>nowy projekt</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    paddingTop: 20,
  },
});

export default Home;
