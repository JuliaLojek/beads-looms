import React from "react";
import { Modal } from "react-native";
import ColorPicker from "native-color-picker";

interface ColorPickerModalProps {
  isModalOpen: boolean;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  handleModalClose: React.Dispatch<React.SetStateAction<false>>;
}

const ColorPickerModal: React.FC<ColorPickerModalProps> = ({ isModalOpen, handleModalClose, setCurrentColor }) => {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <ColorPicker
        colors={["#ff33aa", "#55bb11", "#770011"]}
        onSelect={(color) => {
          setCurrentColor(color);
          handleModalClose(false);
        }}
      />
    </Modal>
  )
}

export default ColorPickerModal;