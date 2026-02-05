import { useState } from "react";
import { TextInput } from "react-native";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CategoriesModal() {
  const [modalVisible, setModalVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [story, setStory] = useState("");

  const handleAddCategory = () => {
    console.log("title:", title, "description:", description, "story:", story);
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Add Category</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.quit}
              >
                <Text>x</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleAddCategory}>
                <Text>Save</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              onChangeText={setTitle}
              value={title}
              placeholder="Title"
            />
            <TextInput
              editable
              multiline
              numberOfLines={4}
              onChangeText={setDescription}
              value={description}
              placeholder="Details"
            />
            <TextInput
              editable
              multiline
              onChangeText={setStory}
              value={story}
              placeholder="What does this bring me"
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
  },
  modal: {
    position: "relative",
    backgroundColor: "white",
    height: "100%",
    bottom: 0,
    borderTopRightRadius: "40px",
    borderTopLeftRadius: "40px",
    padding: "10%",
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  quit: {
    backgroundColor: "red",
  },
});

