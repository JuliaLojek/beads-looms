import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ProjectData } from "../types";
import ProjectCard from "./ProjectCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/StackNav";

interface ProjectListProps {
  projects: ProjectData[];
  navigation: StackNavigationProp<StackParamList, "Home">;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, navigation }) => {
  return (
    <FlatList
      data={projects}
      renderItem={({ item }) => {
        return <ProjectCard project={item} navigation={navigation} />;
      }}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    marginTop: 16,
    paddingHorizontal: 16,
  },
});

export default ProjectList;
