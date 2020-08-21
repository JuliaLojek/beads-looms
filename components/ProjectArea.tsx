import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { PinchGestureHandler } from "react-native-gesture-handler";
import { ProjectData } from "../types";

interface ProjectAreaProps {
  currentColor: string;
  isShifted: boolean;
  projectStructure: string[][];
  setProjectStructure: React.Dispatch<React.SetStateAction<string[][]>>;
}

const ProjectArea: React.FC<ProjectAreaProps> = ({ currentColor, isShifted, projectStructure, setProjectStructure }) => {
  const cellColorChangeHandler = (
    event: GestureResponderEvent,
    rowIndex: number,
    cellIndex: number
  ) => {
    setProjectStructure((prevStructure) => {
      const newStructure = [...prevStructure];
      newStructure[rowIndex][cellIndex] = currentColor;
      return newStructure;
    })
  };

  return (
    <>
      {projectStructure.map((row, index) => {
        const rowIndex = index;
        return (
          <View style={styles.row} key={index}>
            {row.map((cell, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={(event) =>
                    cellColorChangeHandler(event, rowIndex, index)
                  }
                >
                  <View
                    style={{ ...styles.cell, backgroundColor: cell }}
                  ></View>
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
