import React, { useState, useRef } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Easing,
} from 'react-native';
import { styles } from '../../globalStyle';

export default function AnimationTest2() {
  const spinAnim1 = useRef(new Animated.Value(0)).current;
  const spinAnim2 = useRef(new Animated.Value(0)).current;
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(spinAnim1, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.timing(spinAnim1, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(spinAnim2, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.timing(spinAnim2, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    spinAnim1.stopAnimation();
    spinAnim2.stopAnimation();
    spinAnim1.setValue(0);
    spinAnim2.setValue(0);
  };

  const spin = Animated.add(
    spinAnim1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    }),
    spinAnim2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
  );

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, transform: [{ rotateZ: spin }] }}>
        <View style={{ height: 20 }} />
        <Image
          source={require('../../../assets/images/ball-with-radius.png')}
          style={styles.image}
        />
      </Animated.View>
      <View style={{ height: 20 }} />
      <TouchableOpacity
        style={styles.button}
        onPress={isAnimating ? stopAnimation : startAnimation}
      >
        <Text style={styles.buttonText}>
          {isAnimating ? 'STOP ANIMATION' : 'START ANIMATION'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
