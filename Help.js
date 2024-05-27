import React from "react";
import { View, Text, StyleSheet, ImageBackground , TextInput , Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
export default function Help() {


    const onPress = ()=>{
        Alert.alert('Thanks for the Queries we will contact you with in 24 Hours');
    } 

    return (
        <View style={styles.container}>
             <StatusBar backgroundColor="#00FFFF" barStyle="dark-content" />
             <ImageBackground style={styles.imageBackground} source={require('./assets/contact3.jpg')}>
             <View style ={{ flex:0.3 , justifyContent:"center",alignItems:"center" ,}}>
           <Text style={{color:'white' , fontSize:18 ,paddingTop:60}}>Please Provide Your Issues Here</Text>
           </View>
             <TextInput
               
                placeholder={'Write'}
                placeholderTextColor={'white'}
                
                style={styles.input}
               
            />

            <View style={{marginTop:30 , width:150 , marginLeft:105}}>
            <Button color={'orange'} title="Submit" onPress={onPress}></Button>
            </View>
</ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        
         alignItems: "center",
         justifyContent:"center"
    },

    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#00FFFF',
        borderRadius: 3,
        color:'white',
        fontSize:17,
        height:50,
        width:310,
        marginLeft:25,
    
        
    },
   
});
