import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Alert, ImageBackground , TouchableOpacity } from 'react-native'; // Import ImageBackground
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Import your firebase auth instance
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User signed up successfully
                const user = userCredential.user;
                console.log('User signed up successfully', userCredential.user);
                Alert.alert('Sign Up Successful');
                navigation.navigate('SignIn')
                // Navigate to the next screen or perform any action after successful signup
            })
            .catch((error) => {
                console.error('Sign up failed:', error.message);
                Alert.alert('Sign Up Failed', error.message);
            });
    };

    return (
        <ImageBackground source={require('./assets/back2.png')} style={styles.container}>
    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#00FFFF', fontSize: 30, fontWeight: '500' }}>SIGN UP</Text>
        {/* <Text style={{ color: '#2ECC71', fontSize: 30, fontWeight: '800' }}>&</Text> */}
        <Text style={{ color: '#00FFFF', fontSize: 14 , paddingBottom: 20 }}>&Get Started</Text>
    </View>
    <TextInput
        value={firstName}
        placeholder={'First Name'}
        placeholderTextColor={'white'}
        style={styles.input}
        onChangeText={setFirstName}
        
        
    />
    <TextInput
        value={lastName}
        placeholder={'Last Name'}
        placeholderTextColor={'white'}
        style={styles.input}
        onChangeText={setLastName}
    />
    <TextInput
        value={email}
        placeholder={'Email'}
        placeholderTextColor={'white'}
        style={styles.input}
        onChangeText={setEmail}
    />
    <TextInput
        value={password}
        placeholder={'Password'}
        placeholderTextColor={'white'}
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
    />
    {/* <Button color={'grey'} onPress={handleSignUp} title="Sign Up" /> */}
    <TouchableOpacity  style = {{borderRadius:20 , backgroundColor:'#00FFFF' , marginTop:60 , width:270 , marginLeft:28 }} onPress={handleSignUp} >
                <Text style={{paddingLeft : 110 , fontSize:30  ,  color:'#212F3C' ,paddingLeft:78}}>SIGN UP</Text>
            </TouchableOpacity>
</ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover", // Cover the entire screen
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#00FFFF',
        borderRadius: 3,
        marginBottom: 10,
        fontSize:17,
        color:'white'
    },
});


