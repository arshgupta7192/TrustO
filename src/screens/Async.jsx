// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// import AsyncStorage from '@react-native-async-storage/async-storage'

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




import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

const Async = () => {

    const[user, setUser] = useState('')

    const setUsername = async () => {
        await AsyncStorage.setItem("user", "Anil")
    }

    const setPassword = async () => {
        const name = await AsyncStorage.getItem("user") 
        console.warn("name");
        setUser(name)
    }

    const removeData = async () => {
        await AsyncStorage.removeItem("user")
        setUser('')
    }

  return (
    <View style={{marginTop:100, marginLeft:30}} >
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

      <Button title='Login' onPress={onSubmit}/>
      <Button title='Get Data' onPress={getStored}/>
      <Button title='Remove Data' onPress={removeData}/>

    </View>
  )
}

export default Async

const styles = StyleSheet.create({
    
})