import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProjectData } from "../types";

export type StackParamList = {
  Home: undefined;
  Project: ProjectData;
};

const Stack = createStackNavigator<StackParamList>();

export default Stack;
