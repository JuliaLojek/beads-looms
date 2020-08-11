import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Project from "../screens/Project";
import { StackNavigationState } from "@react-navigation/native";

export type StackParamList = {
  Home: undefined;
  Project: { id?: number };
};

const Stack = createStackNavigator<StackParamList>();

export default Stack;
