//hello World
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList , Image } from 'react-native';

export default function App() {
const mydata = [{Name : 'Mobeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ali' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahmad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Umer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Mbeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ai' , RegNo : 201 , Time : '2:30'},
                {Name : 'Amad' , RegNo : 515 , Time : '5:40'},
              
                {Name : 'Uer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Moeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Al' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Mobeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ali' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahmad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Umer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Mbeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ai' , RegNo : 201 , Time : '2:30'},
                {Name : 'Amad' , RegNo : 515 , Time : '5:40'},
              
                {Name : 'Uer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Moeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Al' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Mobeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ali' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahmad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Umer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Mbeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ai' , RegNo : 201 , Time : '2:30'},
                {Name : 'Amad' , RegNo : 515 , Time : '5:40'},
              
                {Name : 'Uer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Moeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Al' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Mobeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ali' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahmad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Umer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Mbeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ai' , RegNo : 201 , Time : '2:30'},
                {Name : 'Amad' , RegNo : 515 , Time : '5:40'},
              
                {Name : 'Uer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Moeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Al' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Mobeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ali' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahmad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Umer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Mbeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ai' , RegNo : 201 , Time : '2:30'},
                {Name : 'Amad' , RegNo : 515 , Time : '5:40'},
              
                {Name : 'Uer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Moeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Al' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Mobeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ali' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahmad' , RegNo : 515 , Time : '5:40'},
                {Name : 'Umer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Mbeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Ai' , RegNo : 201 , Time : '2:30'},
                {Name : 'Amad' , RegNo : 515 , Time : '5:40'},
              
                {Name : 'Uer' , RegNo : 175 , Time : '7:40'},
                {Name : 'Moeen' , RegNo : 115 , Time : '9:40'},
                {Name : 'Al' , RegNo : 201 , Time : '2:30'},
                {Name : 'Ahad' , RegNo : 515 , Time : '5:40'},

                ];
 


  return (
    <View style={styles.container}>
      <View style ={{flex:0.3,backgroundColor:'green',alignItems:'center',paddingTop:20}}>   
      <Text>hello Bhai ye mera Area Ha</Text>
      </View>
       <FlatList  data={mydata}
       // keyExtractor={item=>item.Name}
        renderItem={({item})=>(
          <View style ={{ flex:1, backgroundColor:'pink',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
             <View style={{flex:0.1,backgroundColor:'cyan',}}>
              <Image  style={{height:19,width:40}} source = {require('./assets/icon.png')} />
            </View>
            <View style={{flex:0.3,backgroundColor:'yellow'}}>
            <Text style>{item.Name}  </Text> 
            </View>
            <View style={{flex:0.3,backgroundColor:'red'}}>
            <Text > {item.RegNo}  </Text>
            </View>
            <View style={{flex:0.2,alignItems:'flex-end',backgroundColor:'white'}}>
            <Text > {item.Time} </Text>
            </View>
            <View style={{flex:0.1,backgroundColor:'cyan',}}>
              <Text>hi</Text>
          </View>
           
            
           
          </View>
        )}    
      
      />




      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    //justifyContent: 'center',
  },
});
