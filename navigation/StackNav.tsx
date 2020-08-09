import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Project from "../screens/Project";
import { StackNavigationState } from "@react-navigation/native";

type StackParamList = {
  Home: undefined;
  Project: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default Stack;
