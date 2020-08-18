import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import ColorPicker from "native-color-picker";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

// prettier-ignore
const colorList = [
  "#FFFFFF", "#DCDCDC", "#808080", "#000000",
  "#F0FFFF", "#E6E6FA", "#B0C4DE", "#F5FFFA",
  "#FFEFD5", "#FFE4E1", "#FDF5E6", "#F0FFF0",
  "#800000", "#DC143C", "#CD5C5C", "#F08080",
  "#FFA07A", "#FF8C00", "#DAA520", "#FFD700",
  "#FFFF00", "#9ACD32", "#808000", "#556B2F",
  "#008000", "#006400", "#2E8B57", "#66CDAA",
  "#008B8B", "#00FFFF", "#00CED1", "#AFEEEE",
  "#4682B4", "#00BFFF", "#1E90FF", "#87CEEB",
  "#4169E1", "#000080", "#4B0082", "#8A2BE2",
  "#800080", "#9932CC", "#BA55D3", "#FF00FF",
  "#C71585", "#FF1493", "#FF69B4", "#DDA0DD",
  "#FFC0CB", "#BC8F8F", "#D2B48C", "#CD853F",
  "#F5DEB3", "#F4A460", "#A0522D", "#8B4513"
];

interface ColorPickerModalProps {
  isModalOpen: boolean;
  handleModalClose: React.Dispatch<React.SetStateAction<false>>;
  currentColor: string;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPickerModal: React.FC<ColorPickerModalProps> = ({
  isModalOpen,
  handleModalClose,
  currentColor,
  setCurrentColor,
}) => {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.box}>
        <AntDesign
          name="close"
          size={28}
          style={styles.icon}
          onPress={() => handleModalClose(false)}
        />

        <ColorPicker
          colors={colorList}
          onSelect={(color) => {
            setCurrentColor(color);
            handleModalClose(false);
          }}
          columns={4}
          selectedColor={currentColor}
          markerType="checkmark"
          shadow={true}
          style={styles.picker}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  picker: {
    flex: 1,
    alignSelf: "center",
    paddingTop: 8,
    marginBottom: 36,
  },
  icon: {
    padding: 16,
    alignSelf: "flex-end",
  },
});

export default ColorPickerModal;
