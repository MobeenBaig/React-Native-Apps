import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Settings({ navigation }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        setIsDarkMode(storedTheme === 'dark');
      }
    };
    loadTheme();
  }, []);

  const toggleDarkMode = async () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    await AsyncStorage.setItem('theme', newTheme);
  };

  const handleLogout = () => {
    navigation.replace('SignIn');
  };

  const onPress = () => {
    navigation.navigate('AdFree');
  };

  const Help = () => {
    navigation.navigate('Help');
  };

  const backgroundColor = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';
  const borderColor = isDarkMode ? '#00FFFF' : '#00FFFF';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity onPress={toggleDarkMode} style={[styles.View, { borderBottomColor: borderColor }]}>
        <MaterialIcons style={[styles.Icons, { color: '#00FFFF' }]} name="dark-mode" size={24} />
        <Text style={[styles.Text, { color: textColor }]}>Dark Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.View, { borderBottomColor: borderColor }]}>
        <Ionicons style={[styles.Icons, { color:'#00FFFF' }]} name="notifications" size={24} />
        <Text style={[styles.Text, { color: textColor }]}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.View, { borderBottomColor: borderColor }]}>
        <FontAwesome style={[styles.Icons, { color: '#00FFFF', paddingLeft: 19 }]} name="lock" size={24} />
        <Text style={[styles.Text, { color: textColor, paddingLeft: 25 }]}>Privacy & Security</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress} style={[styles.View, { borderBottomColor: borderColor }]}>
        <MaterialCommunityIcons style={[styles.Icons, { color: '#00FFFF' }]} name="advertisements-off" size={24} />
        <Text style={[styles.Text, { color: textColor, paddingLeft: 25 }]}>Ad Free Plan</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={Help} style={[styles.View, { borderBottomColor: borderColor }]}>
        <Feather style={[styles.Icons, { color: '#00FFFF' }]} name="headphones" size={24} />
        <Text style={[styles.Text, { color: textColor }]}>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.View, { borderBottomColor: borderColor }]}>
        <AntDesign style={[styles.Icons, { color: '#00FFFF' }]} name="questioncircleo" size={24} />
        <Text style={[styles.Text, { color: textColor }]}>About</Text>
      </TouchableOpacity>

     <TouchableOpacity onPress={handleLogout} style={[styles.View, { borderBottomColor: borderColor }]}>
        <MaterialIcons style={[styles.Icons, { color: '#00FFFF' }]} name="logout" size={24} />
        <Text style={[styles.Text, { color: textColor }]}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  View: {
    flex: 0.1,
    borderBottomWidth: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icons: {
    paddingLeft: 15,
  },
  Text: {
    paddingLeft: 20,
    fontSize: 15,
  },
});
