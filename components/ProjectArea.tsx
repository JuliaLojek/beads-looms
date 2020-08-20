import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, GestureResponderEvent } from "react-native";
import { PinchGestureHandler } from "react-native-gesture-handler";
import { ProjectData } from "../types";

interface ProjectAreaProps {
  project: ProjectData
}

const ProjectArea: React.FC<ProjectAreaProps> = ({ project }) => {
  
  const cellColorChangeHandler = (event: GestureResponderEvent) => {
    console.log(event.target)
  }

  return (
    <>
      {project.structure.map((row, index) => {
        return (
          <View style={styles.row} key={index}>
            {row.map((cell, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={cellColorChangeHandler}
                >
                  <View style={{ ...styles.cell, backgroundColor: cell }}></View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 20,
    height: 20,
    borderColor: "#444",
    borderWidth: 0.5,
  },
});

export default ProjectArea;
