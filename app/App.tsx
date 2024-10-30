import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AnimationTest1Screen from './homeStack/screens/AnimationTest1Screen';
import AnimationTest2Screen from './homeStack/screens/AnimationTest2Screen';
import HomeScreen from './homeStack/screens/HomeScreen';
import ClassesScreen from './classesStack/screens/ClassesScreen';
import WeekdayClassesScreen from './classesStack/screens/WeekdayClassesScreen';
import WeekdendClassesScreen from './classesStack/screens/WeekdendClassesScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  AnimationTest1: undefined;
  AnimationTest2: undefined;
};

export type ClassesStackParamList = {
  ClassesScreen: undefined;
  WeekdayClassesScreen: undefined;
  WeekendClassesScreen: undefined;
};

// Define the navigators
const HomeStack = createStackNavigator<HomeStackParamList>();
const ClassesStack = createStackNavigator<ClassesStackParamList>();
const Tab = createBottomTabNavigator();

function DictionaryScreen() {
  return (
    <View>
      <Text>Dictionary Screen</Text>
    </View>
  );
}

function YouScreen() {
  return (
    <View>
      <Text>You Screen</Text>
    </View>
  );
}

const options = {headerShown: true, headerTintColor: '#000', headerBackTitleVisible: false}
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
      <HomeStack.Screen name="AnimationTest1" component={AnimationTest1Screen} options={{...options, headerTitle: 'Test 1'}}/>
      <HomeStack.Screen name="AnimationTest2" component={AnimationTest2Screen} options={{...options, headerTitle: 'Test 2'}}/>
    </HomeStack.Navigator>
  );
}

function ClassesStackNavigator() {
  return (
    <ClassesStack.Navigator>
      <ClassesStack.Screen name="ClassesScreen" component={ClassesScreen} options={{...options, headerTitle: 'Classes'}} />
      <ClassesStack.Screen name="WeekdayClassesScreen" component={WeekdayClassesScreen} options={{...options, headerTitle: 'Weekday'}}/>
      <ClassesStack.Screen name="WeekendClassesScreen" component={WeekdendClassesScreen} options={{...options, headerTitle: 'Weekend'}}/>
    </ClassesStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
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
            } else if (route.name === 'You') {
              iconName = 'person';
            }
            return <Ionicons name={iconName ?? 'home'} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackNavigator} options={{headerShown: false}}/>
        <Tab.Screen name="Classes" component={ClassesStackNavigator} options={{headerShown: false}}/>
        <Tab.Screen name="Dictionary" component={DictionaryScreen} options={{headerShown: false}}/>
        <Tab.Screen name="You" component={YouScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}