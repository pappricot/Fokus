import React, { useState, useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Text, Image, TouchableOpacity, Easing } from 'react-native';
import { styles } from '../app/globalStyle';

interface AnimationTest1Props {
  loading: boolean; // Accept loading as a prop
}

export default function ActivityIndicator({ loading }: AnimationTest1Props) {
  const spinAnim1 = useRef(new Animated.Value(0)).current;
  const spinAnim2 = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(spinAnim1, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
            easing: Easing.linear
          }),
          Animated.timing(spinAnim1, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          })
        ]),
        Animated.sequence([
          Animated.timing(spinAnim2, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
            easing: Easing.linear
          }),
          Animated.timing(spinAnim2, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          })
        ])
      ])
    ).start();
  };

  const stopAnimation = () => {
    spinAnim1.stopAnimation();
    spinAnim2.stopAnimation();
    spinAnim1.setValue(0);
    spinAnim2.setValue(0);
  };

  const spin = Animated.add(
    spinAnim1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    }),
    spinAnim2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
  );
  
  useEffect(() => {
    if (loading) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <View style={{ height: 20 }} />
      <Animated.View style={{ ...styles.box, transform: [{ rotateY: spin }] }}>
        <Image
          source={require('../assets/images/grey-circle-medium.png')}
          style={styles.image}
        />
      </Animated.View>
      <View style={{ height: 20 }} />
    </View>
  );
}

