import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const NavHeader: React.FC = () => {
  return (
    <View style={styles.navBar}>
      <AntDesign
        name="left"
        size={28}
      />
      <Entypo
        name="save"
        size={28}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  navBar: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#333",
    shadowOpacity: 0.5,
  },
})

export default NavHeader;