import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE_URL = 'https://api.api-ninjas.com/v1/recipe';
const API_KEY = 'hb5RSFa5NE1beUWqqq9pjw==xr7Lo24CpwpLSXIQ';

const queries = [
  'Parboiled Noodles #1',
  'Chicken Grilled on Skewers',
  "Ellen's Beef Stew",
  'Seafood Boil for Shrimp, Crab, Crawfish',
];

export default function Cooking() {
  const [data, setData] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(queries[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = {
    'Parboiled Noodles #1': [
      require('./assets/paraboiled2.jpg'),
      require('./assets/paraboiled3.jpg'),
    ],
    'Chicken Grilled on Skewers': [
      require('./assets/chicken1.jpg'),
      require('./assets/chicken2.jpg'),
      
    ],
    "Ellen's Beef Stew": [
      require('./assets/beef1.jpg'),
      require('./assets/beef2.jpg'),
  
    ],
    'Seafood Boil for Shrimp, Crab, Crawfish': [
      require('./assets/f1.jpeg'),
      require('./assets/sea2.jpg'),
     
    ],
  };

  useEffect(() => {
    loadData();
    if (selectedRecipe in images) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images[selectedRecipe].length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [selectedRecipe]);

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem(selectedRecipe);
      if (storedData) {
        setData(JSON.parse(storedData));
        console.log(`Loaded ${selectedRecipe} from AsyncStorage`);
      } else {
        fetchData();
      }
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?query=${encodeURIComponent(selectedRecipe)}`, {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
      setData(response.data);
      console.log(`Fetched ${selectedRecipe} from API`);

      await AsyncStorage.setItem(selectedRecipe, JSON.stringify(response.data));
      console.log(`Stored ${selectedRecipe} in AsyncStorage`);
    } catch (error) {
      console.error('Error fetching or storing data:', error);
    }
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity
      style={[styles.optionButton, selectedRecipe === item && styles.selectedOptionButton]}
      onPress={() => setSelectedRecipe(item)}
    >
      <Text style={[styles.optionButtonText, selectedRecipe === item && styles.selectedOptionButtonText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderRecipeItem = ({ item }) => (
    <View style={styles.recipeContainer}>
      <Text style={styles.recipeTitle}>{item.title}</Text>
      <Text style={styles.recipeText}>Ingredients: {item.ingredients}</Text>
      {selectedRecipe in images && (
        <ImageBackground style={styles.image} source={images[selectedRecipe][currentImageIndex]}>
          <Text style={styles.imageText}></Text>
        </ImageBackground>
      )}
      <Text style={styles.recipeText}>Servings: {item.servings}</Text>
      <Text style={styles.recipeText}>Instructions: {item.instructions}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.16 }}>
        <Text style={styles.headerText}>Recipe Book</Text>
        <FlatList
          style={styles.queryList}
          horizontal
          data={queries}
          renderItem={renderOption}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.optionsContainer}
        />
      </View>
      <View style={{ flex: 0.8 }}>
        <FlatList
          data={data}
          renderItem={renderRecipeItem}
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
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00FFFF',
    marginLeft: 10,
  },
  queryList: {
    backgroundColor: 'black',
    paddingTop: 15,
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
    width: 180,
  },
  selectedOptionButton: {
    backgroundColor: 'purple',
  },
  optionButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  selectedOptionButtonText: {
    color: '#fff',
  },
  recipeContainer: {
    flex: 1,
    marginVertical: 2,
    marginBottom: 2,
    borderRadius: 10,
    backgroundColor: '#333',
    padding: 10,
  },
  recipeTitle: {
    fontSize: 22,
    color: '#00FFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeText: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 340,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#00FFFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 1,
    marginTop: 10,
  },
  imageText: {
    fontSize: 18,
    color: 'white',
    padding: 5,
    textAlign: 'center',
  },
});
