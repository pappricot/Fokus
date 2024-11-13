import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AnimationTest1Screen from './app/homeStack/screens/AnimationTest1Screen';
import AnimationTest2Screen from './app/homeStack/screens/AnimationTest2Screen';
import HomeScreen from './app/homeStack/screens/HomeScreen';
import ClassesScreen from './app/classesStack/screens/ClassesScreen';
import WeekdayClassesScreen from './app/classesStack/screens/WeekdayClassesScreen';
import WeekdendClassesScreen from './app/classesStack/screens/WeekdendClassesScreen';
import OutfitScreen from './app/homeStack/screens/OutfitScreen';
import SignInScreen from './app/authenticationStack/SignInScreen';
import ProfileScreen from './app/userStack/screens/ProfileScreen';
import CheckIn from './app/userStack/screens/CheckIn';
import { AuthProvider, useAuth } from './app/context/AuthContext';

export type AuthenticationStackParamList = {
  SignInScreen: undefined;
  // HomeScreen: undefined;
  // ProfileScreen: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  OutfitScreen: undefined;
  AnimationTest1: undefined;
  AnimationTest2: undefined;
};

export type ClassesStackParamList = {
  ClassesScreen: undefined;
  WeekdayClassesScreen: undefined;
  WeekendClassesScreen: undefined;
};
export type UserStackParamList = {
  ProfileScreen: undefined;
  CheckIn: undefined;
};

// Define the navigators
const AuthenticationStack =
  createStackNavigator<AuthenticationStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const ClassesStack = createStackNavigator<ClassesStackParamList>();
const UserStack = createStackNavigator<UserStackParamList>();

const Tab = createBottomTabNavigator();

function DictionaryScreen() {
  return (
    <View>
      <Text>Dictionary Screen</Text>
    </View>
  );
}

const options = {
  headerShown: true,
  headerTintColor: '#000',
  headerBackTitleVisible: false,
};

function AuthStackNavigator() {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: true }}
      />
      {/* <AuthenticationStack.Screen name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} />
         <AuthenticationStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ ...options, headerTitle: 'Profile' }}
      /> */}
    </AuthenticationStack.Navigator>
  );
}
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="AnimationTest1"
        component={AnimationTest1Screen}
        options={{ ...options, headerTitle: 'Test 1' }}
      />
      <HomeStack.Screen
        name="AnimationTest2"
        component={AnimationTest2Screen}
        options={{ ...options, headerTitle: 'Test 2' }}
      />
      <HomeStack.Screen
        name="OutfitScreen"
        component={OutfitScreen}
        options={{ ...options, headerTitle: 'Outfit' }}
      />
    </HomeStack.Navigator>
  );
}

function ClassesStackNavigator() {
  return (
    <ClassesStack.Navigator>
      <ClassesStack.Screen
        name="ClassesScreen"
        component={ClassesScreen}
        options={{ ...options, headerTitle: 'Classes' }}
      />
      <ClassesStack.Screen
        name="WeekdayClassesScreen"
        component={WeekdayClassesScreen}
        options={{ ...options, headerTitle: 'Weekday' }}
      />
      <ClassesStack.Screen
        name="WeekendClassesScreen"
        component={WeekdendClassesScreen}
        options={{ ...options, headerTitle: 'Weekend' }}
      />
    </ClassesStack.Navigator>
  );
}

function UserStackNavigator() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ ...options, headerTitle: 'Profile' }}
      />
      <UserStack.Screen
        name="CheckIn"
        component={CheckIn}
        options={{ ...options, headerTitle: 'Check In' }}
      />
    </UserStack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

function MainNavigator() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Classes') {
            iconName = 'calendar';
          } else if (route.name === 'Dictionary') {
            iconName = 'book';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          return (
            <Ionicons name={iconName ?? 'home'} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Classes"
        component={ClassesStackNavigator}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen name="Dictionary" component={DictionaryScreen} options={{headerShown: false}}/> */}
      <Tab.Screen
        name="Profie"
        component={UserStackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  ) : (
    <AuthStackNavigator />
  );
}
