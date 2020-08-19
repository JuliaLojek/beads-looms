import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

export type StackParamList = {
  Home: undefined;
  Project: { id?: string };
};

const Stack = createStackNavigator<StackParamList>();

export default Stack;
