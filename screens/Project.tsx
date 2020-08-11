import React from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/StackNav";
import { RouteProp } from "@react-navigation/native";

interface ProjectProps {
  navigation: StackNavigationProp<StackParamList, "Project">;
  route: RouteProp<StackParamList, "Project">;
  id?: number;
}

const Project: React.FC<ProjectProps> = (props) => {

  return (
    <View>
      <Text>Project id: {props.route.params.id}</Text>
    </View>
  )
}

export default Project;