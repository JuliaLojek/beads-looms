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
import projects from "../components/ProjectListMockup";
import ProjectList from "../components/ProjectList";

interface HomeProps {
  navigation: StackNavigationProp<StackParamList, "Home">;
}

const defaultProjectData = {
  key: "001",
  name: "test",
  structure: [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ],
  isShifted: false,
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const buttonPressHandler = () => {
    navigation.navigate("Project", { project: defaultProjectData });
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={buttonPressHandler}
      >
        <AntDesign name="pluscircle" size={22} style={globalStyles.smallIcon} />
        <Text style={globalStyles.smallText}>nowy projekt</Text>
      </TouchableOpacity>

      <ProjectList
        projects={projects}
      />
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
