import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ProjectData } from "../types";

interface ProjectListProps {
  projects: ProjectData[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <FlatList
      data={projects}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity>
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ProjectList;
