import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text, TextInput, StatusBar, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import Profile from './Profile';
import Settings from './Settings';
import { ImageBackground } from 'react-native';

type ImageItem = {
  key: string;
  image: number;
  name: string;
};

const images: ImageItem[] = [
  { key: '1', image: require('./assets/education.jpg'), name: 'Education' },
  { key: '2', image: require('./assets/sport4.jpg'), name: 'Sports' },
  { key: '3', image: require('./assets/health1.jpg'), name: 'Health' },
  { key: '4', image: require('./assets/asd.jpg'), name: 'Muscles' },
  { key: '5', image: require('./assets/cooking3.jpg'), name: 'Cooking' },
  { key: '6', image: require('./assets/tech.jpg'), name: 'Technology' },
  { key: '7', image: require('./assets/math.webp'), name: 'Artificial Intelligence' }
];

type HomeProps = {
  navigation: any;
};

type HomeScreenProps = {
  filteredImages: ImageItem[];
  setFilteredImages: React.Dispatch<React.SetStateAction<ImageItem[]>>;
  handleImagePress: (item: ImageItem) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  clearSearchQuery: () => void;
};

const Tab = createBottomTabNavigator();

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredImages, setFilteredImages] = useState<ImageItem[]>([]);
  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSearch = () => {
    const filteredData = images.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredImages(filteredData);
  };

  const handleImagePress = (item: ImageItem) => {
    console.log('Image pressed:', item.key);
    if (item.key == '4') {
      navigation.navigate('Jym');
    } else {
      console.log('empty');
    }
  };

  const clearSearchQuery = () => {
    setSearchQuery('');
    setFilteredImages([]);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200}>
      <StatusBar backgroundColor="#00FFFF" barStyle="dark-content" />
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: [{ backgroundColor: 'black', display: keyboardVisible ? 'none' : 'flex' }, null],
            tabBarShowLabel: false
          }}
        >
          <Tab.Screen
            name="Home"
            children={() => (
              <HomeScreen
                filteredImages={filteredImages}
                setFilteredImages={setFilteredImages}
                handleImagePress={handleImagePress}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
                clearSearchQuery={clearSearchQuery}
              />
            )}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size, focused }) => (
                <MaterialIcons
                  name="home"
                  size={30}
                  color={focused ? '#00FFFF' : 'white'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 25 },
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
              tabBarIcon: ({ color, size, focused }) => (
                <MaterialIcons
                  name="account-circle"
                  size={30}
                  color={focused ? '#00FFFF' : 'white'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: true,
              headerTitle: "Settings",
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
              tabBarIcon: ({ color, size, focused }) => (
                <SimpleLineIcons
                  name="settings"
                  size={size}
                  color={focused ? '#00FFFF' : 'white'}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </KeyboardAvoidingView>
  );
};

const HomeScreen: React.FC<HomeScreenProps> = ({ filteredImages, setFilteredImages, handleImagePress, searchQuery, setSearchQuery, handleSearch, clearSearchQuery }) => {
  const renderImages = () => {
    if (searchQuery === '') {
      return images; // Show original list when search query is empty
    } else {
      return filteredImages;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text style={{ color: 'white', paddingLeft: 20, paddingTop: 20, fontSize: 30, fontWeight: 'bold' }}>Skills</Text>
      <View style={{ height: 80, backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingTop: 2 }}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="white"
          onChangeText={(text) => {
            setSearchQuery(text); // Update search query
            const filteredData = images.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            setFilteredImages(filteredData); // Update filtered images
          }}
          value={searchQuery}
        />
        {/* Cross button */}
        {searchQuery !== '' && (
          <TouchableOpacity style={styles.clearButton} onPress={clearSearchQuery}>
            <MaterialIcons name="clear" size={24} color="white" />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={renderImages()} // Render based on search query
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImagePress(item)}>
            <View style={{ flex: 0 }}>
              <ImageBackground style={styles.image} source={item.image}>
                <Text style={{ color: 'white', fontSize: 28, paddingTop: 10, paddingLeft: 8, fontWeight: 'bold' }}>{item.name}</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContent}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 4
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 160,
    width: 346,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#00FFFF',
    borderRadius: 10, // Adjust border radius
    overflow: 'hidden', // Clip overflow content
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default Home;
