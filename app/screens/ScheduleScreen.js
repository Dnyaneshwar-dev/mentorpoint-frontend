import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { statusbar } from "../configs/variables";
import ModalContext from "../hooks/useModal/context";
import DatePicker from "../components/DatePicker";
import DateContext from "../hooks/useDate/context";
import AppPicker from "../components/AppPicker";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import TimePicker from "../components/TimePicker";
import TimeSelector from "../components/TimeSelector";

export default function ScheduleScreen() {
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [timemodal, setTimemodal] = useState(false);
  const [time, setTime] = useState(new Date());
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Add Your Free Schedule</Text>
      </View>
      {/* <View>
        <ModalContext.Provider value={{ modal, setModal }}>
          <DateContext.Provider value={{ date, setDate }}>
            <AppPicker placeholder={date} icon="calendar" />
            <DatePicker />
          </DateContext.Provider>
        </ModalContext.Provider>
      </View> */}
      <View style={styles.buttonscontainer}>
        <AppButton
          title="Slots"
          onPress={() => console.log("slot")}
          buttonStyles={{
            paddingVertical: 10,
            marginVertical: 10,
            borderRadius: 5,
          }}
          IconComponent={
            <MaterialCommunityIcons name="calendar" size={25} color="white" />
          }
        />
        <AppButton
          title="Add"
          onPress={() => console.log("slot")}
          buttonStyles={{
            paddingVertical: 10,
            marginVertical: 10,
            marginHorizontal: 10,
            borderRadius: 5,
          }}
          IconComponent={<Ionicons name="add" size={25} color="white" />}
        />
      </View>
      <ModalContext.Provider
        value={{ modal: timemodal, setModal: setTimemodal }}
      >
        <DateContext.Provider value={{ date: time, setDate: setTime }}>
          <TimePicker />
        </DateContext.Provider>
      </ModalContext.Provider>

      <AppButton title="Open" onPress={() => setTimemodal(true)} />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TimeSelector time="00:00" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusbar,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  titlecontainer: {
    marginVertical: 10,
  },
  buttonscontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
