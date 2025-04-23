// // screens/LoginScreen.js
// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import auth from '@react-native-firebase/auth';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {
//         navigation.replace('Screen1'); // navigate to Screen1 on success
//       })
//       .catch(err => setError(err.message));
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
//       <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
//   error: { color: 'red', textAlign: 'center' },
// });

// export default LoginScreen;












// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import auth from '@react-native-firebase/auth';

// const AuthScreen = ({ navigation }) => {
//   const [isLogin, setIsLogin] = useState(true); // Toggle mode
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleAuth = () => {
//     if (isLogin) {
//       // Login
//       auth()
//         .signInWithEmailAndPassword(email, password)
//         .then(() => {
//           // Success: auto-redirect handled in App.js
//         })
//         .catch(error => Alert.alert('Login Error', error.message));
//     } else {
//       // Sign Up
//       auth()
//         .createUserWithEmailAndPassword(email, password)
//         .then(() => Alert.alert('Success', 'Account created!'))
//         .catch(error => Alert.alert('Signup Error', error.message));
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>{isLogin ? 'Login' : 'Sign Up'}</Text>

//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         keyboardType="email-address"
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//       />

//       <Button title={isLogin ? 'Login' : 'Sign Up'} onPress={handleAuth} />

//       <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
//         <Text style={styles.toggle}>
//           {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AuthScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F0FFFD' },
//   header: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
//   input: { borderBottomWidth: 1, marginBottom: 15, fontSize: 16, padding: 8 },
//   toggle: { marginTop: 20, textAlign: 'center', color: '#00665A' },
// });






















import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { getApp } from '@react-native-firebase/app';

const auth = getAuth(getApp());

const AuthScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = () => {
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log('User logged in');
        })
        .catch(error => Alert.alert('Login Error', error.message));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => Alert.alert('Success', 'Account created!'))
        .catch(error => Alert.alert('Signup Error', error.message));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isLogin ? 'Login' : 'Sign Up'}</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button title={isLogin ? 'Login' : 'Sign Up'} onPress={handleAuth} />

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.toggle}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F0FFFD' },

  header: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },

  input: { borderBottomWidth: 1, marginBottom: 15, fontSize: 16, padding: 8 },
  
  toggle: { marginTop: 20, textAlign: 'center', color: '#00665A' },
});
