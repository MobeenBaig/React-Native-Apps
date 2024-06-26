import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import the specific function
import SignIn from './SignIn';
//import SignIn from './Signi';
import firebase from './firebase';
import Profile from './Profile';
import AdFree from './AdFree';

import SignUp from './SignUp';
//import Home from './Home';
import FirstScreen from './FirstScreen';
import Help from './Help';
import Jym from './Jym';
import B from './B';
import Gym from './Gym';
//import Home from './Home';
import Home from './Home';
// import Home from './Home11';
//import Home from './Home12';
import { ThemeProvider } from './Theme';
import Cooking from './Cooking';
import Education from './Education';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
   
    <NavigationContainer>
      <ThemeProvider>
      <Stack.Navigator>

      
          {/* <Stack.Screen 
          name='FirstScreen'
          component={FirstScreen}
          options={{ headerShown: false }} 
        />  */}

      {/* <Stack.Screen 
          name='Gym'
          component={Gym}
          options={{ headerShown: false }} 
        />   */}
        <Stack.Screen 
          name='Home'
          component={Home}
          options = {{headerShown:false}}
        /> 

       <Stack.Screen 
          name='Cooking'
          component={Cooking}
          options={{ headerShown: false }} 
        />  

<Stack.Screen 
          name='Education'
          component={Education}
          options={{ headerShown: false }} 
        />  

{/* <Stack.Screen 
          name='AdFree'
          component={AdFree}
          options = {{headerShown:false}}
        />  */}




<Stack.Screen 
          name='SignUp'
          component={SignUp}
          options = {{headerShown:false}}
        />
{/* <Stack.Screen 
          name='B'
          component={B}
          options = {{headerShown:false}}
        />  */}

{/* <Stack.Screen 
          name='Home1'
          component={Home}
          options = {{headerShown:false}}
        />  */}

{/* <Stack.Screen 
          name='SignIn'
          component={SignIn}
          options={{ headerShown: false }} 
        />  */}

        <Stack.Screen 
          name='SignIn'
          component={SignIn}
          options={{ headerShown: false }} 
        /> 

{/* <Stack.Screen 
          name='Home'
          component={Home}
          options = {{headerShown:false}}
        />  */}


<Stack.Screen 
          name='Jym'
          component={Jym}
          options = {{headerShown:false}}
        /> 

 
        <Stack.Screen 
          name='Help'
          component={Help}
          options = {{headerShown:false}}
        /> 
        <Stack.Screen 
          name='AdFree'
          component={AdFree}
          options = {{headerShown:false}}
        /> 




        
      </Stack.Navigator>
      
      </ThemeProvider>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

