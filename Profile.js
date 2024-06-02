import React from "react";
import { View, Text, StyleSheet, Image , ScrollView, Animated} from "react-native";
import { ProgressBar } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export default function Settings() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.header}>
                {/* Profile Image */}
                <Image
                    source={require('./assets/mobeen.jpeg')}
                    style={styles.profileImage}
                />
                <Text style={{fontWeight:"bold" , color:'white'}}>Mobeen Baig</Text>
                
            </View>
            
            <View style={styles.second}>
                <Text style={styles.textHead}>Skills Progress Top 3</Text>
                <View style={styles.progressContainer}>
                    <Text style={styles.text}>JavaScript 60%</Text>
                    <ProgressBar  progress={0.6} color={'#FFD700'} style={styles.progressContainer} />
                        <Text style={styles.text}>SideArms 45%</Text>
                        <ProgressBar progress={0.45} color={'#32CD32'} style={styles.progressContainer} />
                        <Text style={styles.text}>Machine Learning 100%</Text>
                        <ProgressBar progress={1} color={'#4169E1'} style={styles.progressContainer} />
                    
                </View>
                
                
            </View>
            <View style={{  backgroundColor:'black' ,}}>
            <Text style={styles.textHead}>Badges</Text>
            <Text style={{paddingLeft: 10,
        fontSize: 15,
        // fontWeight: 'bold',
        color: 'white',}}>Get Rewarded for yout learning progress with one-of-a-kind badges. Check out the badges you earned and learn about the next badges you could earn here.</Text>
            <AntDesign style={{paddingLeft:10 , marginBottom:15 , marginTop:15}} name="star" size={21} color="#FFD700">
            <Text style={styles.text}>Beginner Badge</Text>
            </AntDesign>
            <AntDesign style={{paddingLeft:10 , marginBottom:15}} name="star" size={21} color="#32CD32">
            <Text style={styles.text}>Advance Badge</Text>
            </AntDesign>
            <AntDesign style={{paddingLeft:10 , paddingBottom:15}} name="star" size={21} color="#4169E1">
            <Text style={styles.text}>Master Badge</Text>
            </AntDesign>
            <Text style={styles.textHead}>Achievements</Text>
            
            
            
            </View>

            <View style={styles.Lifetime}> 
            
            <TouchableOpacity style={styles.inside}> 
            <Text style={styles.insidetext}>Complete a Course</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.inside}> 
            <Text style={styles.insidetext}>Submit a Project</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Lifetime}> 
            
            <TouchableOpacity style={styles.inside}> 
            <Text style={styles.insidetext}>Save Class</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.inside}> 
            <Text style={styles.insidetext}>Complete 1 Course</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Lifetime}> 
            
            <TouchableOpacity style={styles.inside}> 
            <Text style={styles.insidetext}>Complete 5 Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.inside}> 
            <Text style={styles.insidetext}>Complete 5 Courses</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Lifetime}> 
            
            <TouchableOpacity style={styles.inside}> 
            <Text style={styles.insidetext}>Complete 10 Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.inside}> 
            <Text style={styles.insidetext}>Complete 10 Courses</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Lifetime}> 
            
            <TouchableOpacity style={styles.inside}> 
            <Text style={styles.insidetext}>Complete 15 Classes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.inside}> 
            <Text style={styles.insidetext}>Complete 15 Classes</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        // flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        backgroundColor: '#212121',
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 110,
    },
    second: {
        // flex: 0.3,
        backgroundColor: 'black',
    },
    text: {
        paddingLeft: 10,
        color: 'white',
        fontSize:15
    },
    textHead: {
        paddingLeft: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom:20,
        paddingTop:40
    },
    progressContainer: {
        //paddingTop: 20,
         
        //alignItems: 'center',
        //paddingLeft:10,
        marginBottom:25
    },
    Lifetime:{
        // backgroundColor:'green',
         flex:1,
        flexDirection:"row",
        width:185,
        height:185,
        paddingLeft:20
        },

        
        
        inside:{
            flexDirection:"row",
        width:150,
        height:150,
        paddingLeft:4,
        marginTop:19,
        marginLeft:7,
        marginRight:1 ,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#212121'
        },
        insidetext:{
            fontWeight:"bold",
            fontSize:15,
            color:'white'
        },
});
