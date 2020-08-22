import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ProjectData } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/StackNav";

interface ProjectCardProps {
  project: ProjectData;
  navigation: StackNavigationProp<StackParamList, "Home">;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project, navigation
}) => {
  const cardPressHandler = (project: ProjectData) => {
    navigation.navigate("Project", { project: project })
  }

  return (
    <TouchableOpacity onPress={() => cardPressHandler(project)}>
      <View style={styles.card}>
        <Text>{project.name}</Text>
        <Text>{project.key}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 14,
    marginVertical: 4,
    justifyContent: "space-between",
    borderColor: "pink",
    borderWidth: 2,
  }
})

export default ProjectCard;
