import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE_URL = 'https://api.api-ninjas.com/v1/exercises?muscle=';

export default function Jym() {
  const [data, setData] = useState([]);
  const [selectedMuscle, setSelectedMuscle] = useState('abdominals');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = {
    abdominals: [
      require('./assets/abs.webp'),
      require('./assets/jym2nd.webp'),
      require('./assets/jym3rd.jpg'),
    ],
    abductors: [
      require('./assets/abduct1.webp'),
      require('./assets/abduct2.webp'),
      require('./assets/abduct3.jpg'),
    ],
    adductors: [
      require('./assets/adductor1.webp'),
      require('./assets/adductor2.jpg'),
      require('./assets/adductor3.webp'),
    ],
    biceps: [
      require('./assets/bicep1.webp'),
      require('./assets/bicep2.webp'),
      require('./assets/bicep3.jpg'),
    ],

    calves: [
      require('./assets/calve1.webp'),
      require('./assets/calve2.jpg'),
      require('./assets/calve3.webp'),
    ],

    chest: [
      require('./assets/chest1.jpg'),
      require('./assets/chest2.jpg'),
      require('./assets/chest3.webp'),
    ],

    forearms: [
      require('./assets/forearm1.jpg'),
      require('./assets/forearm2.jpg'),
      require('./assets/forearm3.jpg'),
    ],

    glutes: [
      require('./assets/glute.webp'),
      require('./assets/glute2.webp'),
      require('./assets/glute3.jpg'),
    ],

    hamstrings: [
      require('./assets/hamstring1.jpg'),
      require('./assets/hamstring2.jpg'),
      require('./assets/hamstring3.jpg'),
    ],

    lats: [
      require('./assets/lat1.webp'),
      require('./assets/lat2.jpg'),
      require('./assets/lat3.webp'),
    ],

    lower_back: [
      require('./assets/back1.jpg'),
      require('./assets/back2.webp'),
      require('./assets/back3.jpg'),
    ],

    middle_back: [
      require('./assets/middle1.jpg'),
      require('./assets/middle2.jpg'),
      require('./assets/middle3.jpg'),
    ],

    neck: [
      require('./assets/neck1.jpg'),
      require('./assets/neck2.webp'),
      require('./assets/neck3.webp'),
    ],

    quadriceps: [
      require('./assets/quad1.jpg'),
      require('./assets/quad2.jpg'),
      require('./assets/quad3.jpg'),
    ],

    traps: [
      require('./assets/trap1.jpg'),
      require('./assets/trap2.webp'),
      require('./assets/trap3.webp'),
    ],
    // Add more muscle groups and their images here
  };

  useEffect(() => {
    loadData();
    if (selectedMuscle in images) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images[selectedMuscle].length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [selectedMuscle]);

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem(selectedMuscle);
      if (storedData) {
        setData(JSON.parse(storedData));
        console.log('Loaded from local storage');
      } else {
        fetchData();
      }
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(API_BASE_URL + selectedMuscle, {
        headers: {
          'X-Api-Key': 'hb5RSFa5NE1beUWqqq9pjw==xr7Lo24CpwpLSXIQ',
        },
      });
      setData(response.data);
      await AsyncStorage.setItem(selectedMuscle, JSON.stringify(response.data));
      console.log('Fetched from API');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const muscleGroups = [
    'abdominals',
    'abductors',
    'adductors',
    'biceps',
    'calves',
    'chest',
    'forearms',
    'glutes',
    'hamstrings',
    'lats',
    'lower_back',
    'middle_back',
    'neck',
    'quadriceps',
    'traps',
  ];

  const renderOption = ({ item }) => (
    <TouchableOpacity
      style={[styles.optionButton, selectedMuscle === item && styles.selectedOptionButton]}
      onPress={() => setSelectedMuscle(item)}
    >
      <Text style={[styles.optionButtonText, selectedMuscle === item && styles.selectedOptionButtonText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.16 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#00FFFF', marginLeft: 10 }}>Exercise List For Muscles</Text>
        <FlatList
          style={{ backgroundColor: 'black', paddingTop: 15 }}
          horizontal
          data={muscleGroups}
          renderItem={renderOption}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.optionsContainer}
        />
      </View>
      <View style={{ flex: 0.8 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <View style={{ flex: 0.3, marginVertical: 2, marginBottom: 2, borderRadius: 10 }}>
                <Text style={{ fontSize: 22, color: '#00FFFF', fontWeight: 'bold', marginBottom: 15, marginLeft: 10 }}>{item.name}</Text>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginLeft: 10 }}>Muscle: {item.muscle}</Text>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', paddingTop: 4, marginLeft: 10 }}>Equipment: {item.equipment}</Text>
                {selectedMuscle in images && (
                  <ImageBackground style={styles.image} source={images[selectedMuscle][currentImageIndex]} />
                )}
                <Text style={{ fontSize: 16, color: 'white', paddingTop: 4, marginLeft: 10, textAlign: 'justify' }}>Instructions: {item.instructions}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    height: 45,
    width: 140,
  },
  selectedOptionButton: {
    backgroundColor: 'purple',
  },
  optionButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  selectedOptionButtonText: {
    color: '#fff',
  },
  image: {
    height: 160,
    width: 346,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#00FFFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 8,
    marginTop: 10,
  },
});
