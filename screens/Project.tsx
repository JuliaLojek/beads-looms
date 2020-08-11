import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../navigation/StackNav";
// import { RouteProp } from "@react-navigation/native";

// extracting navigation prop and route prop separately:
// interface ProjectProps {
//   navigation: StackNavigationProp<StackParamList, "Project">;
//   route: RouteProp<StackParamList, "Project">;
//   id?: number;
// }
// extracting navigation prop and route prop together:
type ProjectProps = StackScreenProps<StackParamList, "Project">;

const Project: React.FC<ProjectProps> = (props) => {
  const [projectId, setProjectId] = useState(props.route.params.id);

  return (
    <View>
      <Text>Project id: {projectId}</Text>
    </View>
  )
}

export default Project;