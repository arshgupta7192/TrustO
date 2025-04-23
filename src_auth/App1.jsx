
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { Screen } from 'react-native-screens';

// import Screen3 from './screens/Screen3'
// import LoginScreen from './screens/LoginScreen'

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
    
//       <NavigationContainer>
//         <Stack.Navigator>

//           <Stack.Screen
//             name='Screen3'
//             component={Screen3}
//           />


//           <Stack.Screen
//             name='LoginScreen'
//             component={LoginScreen}
//           />

//         </Stack.Navigator>
//       </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({

// })





// -------------------------------------Wrong-----------------------------

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1_ from './Screens_/Screen1_'

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen1_')}
      >
        <Text style={styles.Text}>
          Next
        </Text>
      </TouchableOpacity>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  Text: {
    fontSize:30,
    padding: 20
  }
})






// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// import auth from '@react-native-firebase/auth';

// import Screen1_ from './Screens_/Screen1_';

// export default function Screen1_() {
//   return (
//     <View>
//       <Screen1_/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})