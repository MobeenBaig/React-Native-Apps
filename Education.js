import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE_URL = 'https://api.api-ninjas.com/v1/trivia?category=';

export default function Education() {
  const [triviaData, setTriviaData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('music');

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${selectedCategory}`, {
        headers: {
          'X-Api-Key': 'hb5RSFa5NE1beUWqqq9pjw==xr7Lo24CpwpLSXIQ',
        },
      });
      setTriviaData(response.data);
      await AsyncStorage.setItem(selectedCategory, JSON.stringify(response.data));
      console.log('Fetched trivia data');
    } catch (error) {
      console.error('Error fetching trivia data:', error);
    }
  };

  const handleNextQuestion = () => {
    fetchData();
  };

  const categories = [
    'music',
    'artliterature',
    'language',
    'sciencenature',
    'general',
    'fooddrink',
    'peopleplaces',
    'geography',
    'historyholidays',
    'entertainment',
    'toysgames',
    'mathematics',
    'religionmythology',
    'sportsleisure',
  ];

  const renderCategoryButton = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryButton, selectedCategory === item && styles.selectedCategoryButton]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text style={[styles.categoryButtonText, selectedCategory === item && styles.selectedCategoryButtonText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View style ={{flex:0.1 , justifyContent:'center' ,}}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#00FFFF', marginLeft: 10 ,  }}>Select Knowledge Categories</Text>  
        </View>
      <View style={styles.categoryContainer}>
        <FlatList
          horizontal
          data={categories}
          renderItem={renderCategoryButton}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.categoryList}
        />
      </View>
      <View style={styles.triviaContainer}>
       
        <FlatList
          data={triviaData}
          renderItem={({ item }) => (
            <View style={styles.triviaItem}>
              <Text style={styles.questionText}>{item.question}</Text>
              <Text style={styles.answerText}>Answer: {item.answer}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

<TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={styles.nextButtonText}>Next Question</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  categoryContainer: {
    flex: 0.2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryList: {
    paddingVertical: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
  },
  selectedCategoryButton: {
    backgroundColor: 'orange',
  },
  categoryButtonText: {
    color: '#B3B6B7',
    fontWeight: 'bold',
    fontSize: 20,
  },
  selectedCategoryButtonText: {
    color: 'white',
  },
  triviaContainer: {
    flex: 0.4,
    backgroundColor: '#333',
    padding: 10,
  },
  triviaItem: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 5,
  },
  answerText: {
    fontSize: 16,
    color: 'orange',
  },
  nextButton: {
    backgroundColor: 'orange',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
