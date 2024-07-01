import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ReceCard = ({ userData, deleteRecetaryItem}) => {
  //router card
  const navigation = useNavigation();
  //functions card
  const handleDelete = () => {
    deleteRecetaryItem(userData.id);
  };

  return (
    <View style={styles.containerCard}>
      <View style={styles.contHeaderCard}>
        <Text>{userData.name}</Text>
        <Text>{userData.date}</Text>
      </View>
      <View style={styles.contBodyCard}>
        <Text>{userData.time}</Text>
        <Text>{userData.description}</Text>
      </View>
      <View style={styles.contButton}>
        <Button title="Delete" onPress={handleDelete} />
        <Button
          title="Edit"
          onPress={() => {
            navigation.navigate("Edit", { userData });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    margin: 10,
  },
  contHeaderCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  contBodyCard: {
    alignItems: "center",
    gap: 10,
  },
  contButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ReceCard;
