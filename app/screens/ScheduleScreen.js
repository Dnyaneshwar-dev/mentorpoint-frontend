import { ScrollView, StyleSheet, Text, View } from "react-native";
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
import SlotItem from "../components/SlotItem";

export default function ScheduleScreen() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [starttime, setStarttime] = useState(new Date());
  const [endtime, setEndtime] = useState(new Date());
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Add Your Free Schedule</Text>
      </View>
      <View>
        <ModalContext.Provider value={{ modal, setModal }}>
          <DateContext.Provider value={{ date, setDate }}>
            <AppPicker placeholder={date} icon="calendar" />
            <DatePicker />
          </DateContext.Provider>
        </ModalContext.Provider>
      </View>
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
      </View>
      <ModalContext.Provider value={{ modal: modal1, setModal: setModal1 }}>
        <DateContext.Provider
          value={{ date: starttime, setDate: setStarttime }}
        >
          {modal1 ? <TimePicker modal={modal1} /> : <></>}
        </DateContext.Provider>
      </ModalContext.Provider>

      <ModalContext.Provider value={{ modal: modal2, setModal: setModal2 }}>
        <DateContext.Provider value={{ date: endtime, setDate: setEndtime }}>
          {modal2 ? <TimePicker modal={modal2} /> : <></>}
        </DateContext.Provider>
      </ModalContext.Provider>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 17,
            marginHorizontal: 10,
          }}
        >
          Add a Free Time Slot
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TimeSelector
              time="00:00"
              onPress={() => {
                setModal1(true);
                console.log(starttime);
                console.log("done");
              }}
            />
            <TimeSelector time="00:00" onPress={() => setModal2(true)} />
          </View>
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
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 17,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          Your Slots
        </Text>
        <ScrollView>
          <View>
            <SlotItem starttime="8.30" endtime="10.30" />
            <SlotItem starttime="12.30" endtime="1.30" />
            <SlotItem starttime="6.30" endtime="9.30" />
          </View>
        </ScrollView>
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
    margin: 10,
  },
  titlecontainer: {
    marginVertical: 10,
  },
  buttonscontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
