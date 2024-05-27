import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { BackHandler } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { Entypo } from '@expo/vector-icons';
export default function AdFree() {


   

    return (
        <View style={styles.container}>
             <StatusBar backgroundColor="#00FFFF" barStyle="dark-content" />
             <ImageBackground style={styles.imageBackground} source={require('./assets/asc.jpg')}>
             <View style = {{flex:0.1 ,alignItems:"center" , justifyContent:"center" , marginTop:40 }}>
           {/* <Text style={{color:'red' , fontSize:30 }}>Subscribe To Premium</Text> */}
          
          
           <Entypo style={{borderRadius:50}} name="emoji-flirt" size={55} backgroundColor="orange"  />
           <Text style={{fontSize:14 , color:'white'}}>Hurry Up!</Text>
           </View>

           <View style = {{flex:0.3  , alignItems:"center" , justifyContent:"center"}}>
           
           <Text style={{color:'white' , fontSize:40 , fontWeight:"bold" }}>Subscribe to </Text>
           <Text style={{color:'white' , fontSize:40  , fontWeight:"bold"}}>Premium</Text>
           <Text style={{color:'white' , fontSize:18 , paddingTop:20 }}>Enjoy our ad-free experience when you </Text>
           <Text style={{color:'white' , fontSize:18 }}>subscribe to Premium </Text>
           </View>
           
           <View style ={{ flex:0.3 , justifyContent:"center",alignItems:"center" ,}}>
           <Text style={{color:'red' , fontSize:18 ,paddingBottom:3}}>Limited time offer!</Text>
           <Text style={{color:'yellow' , fontSize:18,marginLeft:14 }}>Subscribe Now To Get 25% Off For 1 Year   </Text>
           <Text style={{color:'white' , marginLeft:3 , marginTop:40
            }}>The subscription renews automatically each year. You can cancel your subscription at anytime through your google playstore account settings</Text>
           </View>
           <View style={{ flex: 0.2,  }}>
    <TouchableOpacity activeOpacity={0.6} style = {{alignItems:'center' , justifyContent:"center" , backgroundColor:'cyan' , width:300 , marginLeft:30 , borderRadius:6}}>
        <Text style = {{fontSize:32 , color:'black'}}>Subscribe For 50$</Text>
    </TouchableOpacity>
</View>
</ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        //paddingTop:30,
        // backgroundColor: 'white',
        //  alignItems: "center",
        //  justifyContent:"center"
    },

    View:{
        flex: 0.1, 
        backgroundColor: 'black',
        borderBottomWidth: 0.3,
        borderBottomColor: '#00FFFF',
        flexDirection: 'row',
        alignItems: 'center'
    },

    Icons:{
        paddingLeft:15,
        
    }
    ,
    Text: {
        color:'white' , paddingLeft:20 , fontSize:15
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
   
});
