// import React from 'react';
// import { View, Button, TouchableOpacity, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { styles } from '../../globalStyle';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { HomeStackParamList } from '@/app/App';

// type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'HomeScreen'>; 
// export default function HomeScreen() {
//   const navigation = useNavigation<HomeScreenNavigationProp>();

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('AnimationTest1')}
//       >
//         <Text style={styles.buttonText}>
//         COIN
//         </Text>
//       </TouchableOpacity>
//       <View style={{ height: 20 }} />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('AnimationTest2')}
//       >
//         <Text style={styles.buttonText}>
//         FLOWER
//         </Text>
//       </TouchableOpacity>
//       {/* Add more buttons as needed */}
//     </View>
//   );
// }

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { styles as globalStyles } from '../../globalStyle';

const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.greeting}>Good morning, @morphofokus. It's 19°C and sunny in your area. Today at a glance and siggested outfit:</Text>
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>EXPLORE OUTFITS</Text>
      </TouchableOpacity>
  
      
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../../assets/images/mockProfile.png')} 
          style={styles.profileImage} 
          resizeMode="center"
        />
      </View>
      
      <View style={styles.listContainer}>
        <View style={styles.doContainer}>
          <Text style={styles.listTitle}>Do</Text>
          <Text>Extension</Text>
          <Text>Back scratch</Text>
          <Text>Midnight oil</Text>
        </View>
        
        <View style={styles.dontContainer}>
          <Text style={styles.listTitle}>Don't</Text>
          <Text>Lukewarm coffee</Text>
          <Text>Clothes on floor</Text>
          <Text>Spreadsheets</Text>
        </View>
      </View>
      <Text style={styles.advice}>Flirt to find possibility of connection, not to boost your ego.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 20
  },
  advice: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 20
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  doContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dontContainer: {
    flex: 1,
    alignItems: 'center',
  },
  listTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    width: 100, 
    height: 100, 
    overflow: 'hidden', 
    borderRadius: 50, 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'black'
  },
  profileImage: {
    width: '100%', // Makes the image fill the container
    height: '100%', // Makes the image fill the container
  },
});

export default HomeScreen;


