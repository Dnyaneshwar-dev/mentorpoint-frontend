import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../configs/variables";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function SessionTypeItem({ title, price }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.time}>{title}</Text>
        <Text style={styles.time}> - </Text>
        <Text style={styles.time}>{price}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>
          <View style={[styles.button, { backgroundColor: "blue" }]}>
            <MaterialIcons name="edit" size={20} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.button, { backgroundColor: "red" }]}>
            <MaterialCommunityIcons name="delete" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    borderRadius: 5,
  },
  time: {
    fontWeight: "700",
    fontSize: 17,
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 8,
    borderRadius: 5,
    marginVertical: 10,
    marginLeft: 10,
  },
});
