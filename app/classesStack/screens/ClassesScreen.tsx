import { ClassesStackParamList } from "@/app/App";
import { styles } from "@/app/globalStyle";
import { ThemedText } from "@/components/ThemedText";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, TouchableOpacity } from "react-native";

type ClassesScreenNavigationProp = StackNavigationProp<ClassesStackParamList, 'ClassesScreen'>;

export default function ClassesScreen() {
  const navigation = useNavigation<ClassesScreenNavigationProp>(); 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WeekdayClassesScreen')} // Navigate to WeekdayClassesScreen
      >
        <ThemedText style={styles.buttonText}>WEEKDAY CLASSES</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WeekendClassesScreen')} // Navigate to WeekendClassesScreen
      >
        <ThemedText style={styles.buttonText}>WEEKEND CLASSES</ThemedText>
      </TouchableOpacity>

    </View>
  );
}