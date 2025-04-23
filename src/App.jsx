// import { NavigationContainer } from '@react-navigation/native';
// import{createNativeStackNavigator} from "@react-navigation/native-stack"

// import Screen1 from './screens/Screen1';
// import Screen2 from './screens/Screen2';
// import Screen3 from './screens/Screen3';

// const Stack = createNativeStackNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>

//                 <Stack.Screen 
//                 name="Screen1" 
//                 component={Screen1} 
//                 options={{
//                   title: "TrustO",
//                   headerStyle:{
//                     // backgroundColor: '#0c3b46',
//                     // backgroundColor: '#00665A'
//                     backgroundColor: '#C5F7F1'
//                   },
//                   // headerTitleAlign: 'center',
//                   headerTitleStyle:{
//                     fontFamily: 'monospace',
//                     fontWeight: 'bold',
//                     color: '#00665A'
//                   }
//                 }}
//                 />

//                 <Stack.Screen 
//                 name="Screen2" 
//                 component={Screen2}
//                 options={{
//                   title: "Categories & Shops",
//                   headerTintColor: '#00665A',
//                   headerStyle:{
//                     // backgroundColor: '#00665A'
//                     backgroundColor: '#C5F7F1'
//                   },
//                   headerTitleStyle:{
//                     color: '#00665A',
//                     fontSize: 20
//                   }
//                 }}
//                 />

// <Stack.Screen 
//                 name="Screen3" 
//                 component={Screen3} 
//                 options={{
//                   title: "Shop Details",
//                   headerTintColor: '#00665A',
//                   headerStyle:{
//                     backgroundColor: '#C5F7F1'
//                   },
//                   headerTitleStyle:{
//                     color: '#00665A'
//                   }
//                 }}                
//                 />
                
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }












// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import auth from '@react-native-firebase/auth';

// import LoginScreen from './screens/LoginScreen';
// import Screen1 from './screens/Screen1';
// import Screen2 from './screens/Screen2';
// import Screen3 from './screens/Screen3';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(userAuth => {
//       setUser(userAuth);
//       if (initializing) setInitializing(false);
//     });

//     return subscriber;
//   }, []);

//   if (initializing) return null;

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {user ? (
//           <>
//             <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
//             <Stack.Screen name="Screen2" component={Screen2} />
//             <Stack.Screen name="Screen3" component={Screen3} />
//           </>
//         ) : (
//           <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }














// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// import AsyncStorage from '@react-native-async-storage/async-storage'
// // import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

// const Async = () => {

//     const[user, setUser] = useState('')

//     const setData = async () => {
//         await AsyncStorage.setItem("user", "Anil")
//     }

//     const getData = async () => {
//         const name = await AsyncStorage.getItem("user") 
//         console.warn("name");
//         setUser(name)
//     }

//     const removeData = async () => {
//         await AsyncStorage.removeItem("user")
//         setUser('')
//     }

//   return (
//     <View style={{marginTop:100, marginLeft:30}} >
//       <Text style={{fontSize:30}}>Async Storage | {user}</Text>

//       <Button title='Set Data' onPress={setData}/>

//       <Button title='Get Data' onPress={getData}/>
      
//       <Button title='Remove Data' onPress={removeData}/>
//     </View>
//   )
// }

// export default Async

// const styles = StyleSheet.create({})














// ----------------------------------------------Async Storage-------------------------------------------
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

const Async = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const setData = async value => {
        await AsyncStorage.setItem('username', value)
        alert('Username is stored')
    }

    const getData = async () => {
        const value = await AsyncStorage.getItem('username')
        if (value !== null) {
            alert(`Welcome ${value}`)
        }
    }

    // const onSubmit = async () => {
    //     setData(username)
    // }

  return (
    <View style={{marginTop:100}} >
      {/* <Text style={{fontSize:30}}>Async Storage | {user}</Text> */}

    <TextInput
        placeholder='Username'
        value={username}
        onChangeText={value => setUsername(value)}
    />

    <TextInput
        placeholder='password'
        value={password}
        onChangeText={value => setPassword(value)}
    />

      <Button title='Login' onPress={() => setData}/>

      <Button title='Get Data' onPress={getData}/>

    </View>
  )
}

export default Async

const styles = StyleSheet.create({})