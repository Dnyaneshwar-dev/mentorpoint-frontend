import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../configs/variables";

export default function SessionItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.sessioncontainer}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "nowrap",
              overflow: "scroll",
            }}
          >
            <Text style={styles.sessionheader}>{props.title}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", marginRight: 5, fontSize: 15 }}>
              {"\u20A8"}
            </Text>
            <Text style={styles.pricing}>{props.fee}</Text>
          </View>
        </View>
        <View style={styles.moveicon}>
          <MaterialCommunityIcons name="chevron-right" size={30} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    borderColor: colors.grey,
    borderRadius: 5,
    borderWidth: 2,
  },
  sessioncontainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    overflow: "hidden",
  },
  sessionheader: {
    fontSize: 17,
    fontWeight: "bold",
  },
  pricing: {
    color: "green",
    fontWeight: "bold",
    fontSize: 15,
  },
  moveicon: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});
