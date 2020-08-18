import React from "react";
import { Modal, StyleSheet } from "react-native";
import ColorPicker from "native-color-picker";
import { Feather } from "@expo/vector-icons";

interface ColorPickerModalProps {
  isModalOpen: boolean;
  handleModalClose: React.Dispatch<React.SetStateAction<false>>;
  currentColor: string;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPickerModal: React.FC<ColorPickerModalProps> = ({ isModalOpen, handleModalClose, currentColor, setCurrentColor }) => {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <Feather name="x" size={28} style={styles.icon} onPress={() => handleModalClose(false)} />
      <ColorPicker
        colors={["#ff33aa", "#55bb11", "#142155", "#ff334a", "#55b611", "#1428f5"]}
        onSelect={(color) => {
          setCurrentColor(color);
          handleModalClose(false);
        }}
        columns={4}
        selectedColor={currentColor}
        markerType="checkmark"
        shadow={true}
        sort={true}
        style={styles.picker}
      />
    </Modal>
  )
}

const styles = StyleSheet.create({
  picker: {
    alignSelf: "center",
    paddingVertical: 8,
  },
  icon: {
    padding: 16,
    alignSelf: "flex-end",
  }
})

export default ColorPickerModal;