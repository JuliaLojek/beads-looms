import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";

interface HomeProps {
  navigation: {
    navigate: Function;
  };
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const buttonPressHandler = () => {
    navigation.navigate("Project");
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
