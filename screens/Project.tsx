import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../navigation/StackNav";
import ColorPickerModal from "../components/ColorPickerModal";
// import { RouteProp } from "@react-navigation/native";

// extracting navigation prop and route prop separately:
// interface ProjectProps {
//   navigation: StackNavigationProp<StackParamList, "Project">;
//   route: RouteProp<StackParamList, "Project">;
//   id?: number;
// }
// extracting navigation prop and route prop together:
type ProjectProps = StackScreenProps<StackParamList, "Project">;

const Project: React.FC<ProjectProps> = ({ navigation, route }) => {
  const [projectId, setProjectId] = useState(route.params.id);
  const [currentColor, setCurrentColor] = useState("#800080");
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View>
      <ColorPickerModal
        isModalOpen={isModalOpen}
        handleModalClose={() => setIsModalOpen(false)}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <View style={styles.colorWrapper}>
        <Text style={styles.bigText}>kolor:</Text>
        <View
          style={{ ...styles.colorBox, backgroundColor: currentColor }}
        ></View>
        <TouchableOpacity
          style={styles.changeColorButton}
          onPress={() => setIsModalOpen(true)}
        >
          <Text style={styles.smallText}>zmień</Text>
          <Ionicons
            name="ios-color-palette"
            size={22}
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorWrapper: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bigText: {
    fontSize: 24,
  },
  smallText: {
    fontSize: 18,
  },
  colorBox: {
    width: "40%",
    height: 24,
    borderColor: "#000",
    borderWidth: 1,
  },
  changeColorButton: {
    flexDirection: "row",
    elevation: 4,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "pink",
  },
  editIcon: {
    paddingLeft: 10,
  },
});

export default Project;
