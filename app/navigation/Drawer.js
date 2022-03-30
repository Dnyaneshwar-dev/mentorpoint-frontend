import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import "react-native-gesture-handler";

import Heading from "../components/Heading";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
const AppDrawer = createDrawerNavigator();
import Sidebar from "../components/Sidebar";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MentorProfile from "../screens/MentorProfile";
import SessionsDrawer from "../drawers/SessionsDrawer";
import SessionsScreen from "../screens/SessionsScreen";
import OppotunitiesScreen from "../screens/OppotunitiesScreen";
import BookingScreen from "../screens/BookingScreen";
import MentorsScreen from "../screens/MentorsScreen";
import EarningsSceen from "../screens/EarningsSceen";
import EditProfile from "../screens/EditProfile";
import ScheduleScreen from "../screens/ScheduleScreen";
import ChatScreen from "../screens/ChatScreen";

export default function Drawer() {
  return (
    <>
      <NavigationContainer>
        <AppDrawer.Navigator
          drawerContent={(props) => <Sidebar {...props} />}
          screenOptions={{
            headerShown: false,
            drawerLabelStyle: {
              marginLeft: -20,
              fontSize: 18,
              color: "#00aced",
            },
            drawerStyle: {
              //   padding: 10,
            },
            drawerItemStyle: {
              paddingLeft: 20,
            },
          }}
        >
          <AppDrawer.Screen
            component={ChatScreen}
            name="Chats"
            options={{
              drawerIcon: () => (
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={24}
                  color="#00aced"
                />
              ),
            }}
          />
          <AppDrawer.Screen
            component={ScheduleScreen}
            name="MentorScedule"
            options={{
              drawerLabel: "Mentor Schedule",
              drawerIcon: () => (
                <FontAwesome name="calendar" size={24} color="#00aced" />
              ),
            }}
          />
          <AppDrawer.Screen
            component={EditProfile}
            name="EditProfile"
            options={{
              drawerLabel: "Edit Profile",
              drawerIcon: () => (
                <FontAwesome name="edit" size={24} color="#00aced" />
              ),
            }}
          />
          <AppDrawer.Screen
            component={EarningsSceen}
            name="Earnings"
            options={{
              drawerIcon: () => (
                <FontAwesome name="money" size={24} color="#00aced" />
              ),
            }}
          />
          <AppDrawer.Screen
            component={MentorsScreen}
            name="Mentors"
            options={{
              drawerIcon: () => (
                <FontAwesome5 name="people-arrows" size={24} color="#00aced" />
              ),
            }}
          />
          <AppDrawer.Screen
            component={BookingScreen}
            name="Booking"
            options={{
              drawerIcon: () => (
                <FontAwesome5
                  name="chalkboard-teacher"
                  size={24}
                  color="#00aced"
                />
              ),
            }}
          />
          <AppDrawer.Screen
            component={OppotunitiesScreen}
            name="Oppotinities"
            options={{
              drawerIcon: () => (
                <FontAwesome5
                  name="chalkboard-teacher"
                  size={24}
                  color="#00aced"
                />
              ),
            }}
          />
          <AppDrawer.Screen
            component={SessionsScreen}
            name="Sessions"
            options={{
              drawerIcon: () => (
                <FontAwesome5
                  name="chalkboard-teacher"
                  size={24}
                  color="#00aced"
                />
              ),
            }}
          />
          <AppDrawer.Screen
            component={MentorProfile}
            name="Profile"
            options={{
              drawerIcon: () => (
                <AntDesign name="user" size={24} color="#00aced" />
              ),
            }}
          />

          <AppDrawer.Screen
            component={Heading}
            name="Schedule"
            options={{
              drawerIcon: () => (
                <AntDesign name="calendar" size={24} color="#00aced" />
              ),
            }}
          />
        </AppDrawer.Navigator>
      </NavigationContainer>
    </>
  );
}
