import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FirstScreen({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to the next screen after 2 seconds
      navigation.replace('SignIn');
    }, 700); // 1 second delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.Textlogo}>
        SkillSphere
      </Text>
      <Text style={{ color: 'white', fontSize: 16 }}>Discover, Learn & Master</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Background color with opacity for better readability
    paddingTop: 20,
  },
  Textlogo: {
    fontSize: 50,
    color: '#00FFFF', // Text color
    fontWeight: '300', // Make the text bold for emphasis
    
    textShadowColor: '#C70039', // Shadow color
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 0.8, // Shadow radius
  },
});
