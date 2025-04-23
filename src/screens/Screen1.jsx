import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';



// import auth from '@react-native-firebase/auth';
import { getAuth, signOut } from '@react-native-firebase/auth';
import { getApp } from '@react-native-firebase/app';



const CityAreaScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);


  const auth = getAuth(getApp());

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigation.replace({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    }).catch(error => {
      console.error('Logout error:', error);
    });
  };


  // const handleLogout = () => {
  //   auth()
  //     .signOut()
  //     .then(() => {
  //       navigation.replace('LoginScreen'); // Redirect to Login after logout
  //     });
  // };
  
  // Inside Screen1 or wherever navigation is available
// React.useLayoutEffect(() => {
//   navigation.setOptions({
//     headerRight: () => (
//       <Button
//         onPress={handleLogout}
//         title="Logout"
//         color="#D9534F"
//       />
//     ),
//   });
// }, [navigation]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://test-66540.firebaseio.com/.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;
  if (error) return <Text style={styles.errorText}>Error: {error}</Text>;

  const cities = data?.city
    ? data.city.map(city => ({ label: city.name, value: city.id }))
    : [];

  const areas = selectedCity
    ? data?.area
        .filter(area => area.city_id === selectedCity)
        .map(area => ({ label: area.area, value: area.id }))
    : [];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <Text style={styles.header}>TrustO</Text> */}

        <Image
          source={require('../screens/logo/logo_.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.label}>Select City</Text>
        <Dropdown
          style={styles.dropdown}
          data={cities}
          labelField="label"
          valueField="value"
          placeholder="Choose City"
          search
          searchPlaceholder='Search City'
          value={selectedCity}
          onChange={item => {
            setSelectedCity(item.value);
            setSelectedArea(null);
          }}
        />

        <Text style={styles.label}>Select Area</Text>
        <Dropdown
          style={styles.dropdown}
          data={areas}
          labelField="label"
          valueField="value"
          placeholder="Choose Area"
          search
          searchPlaceholder='Search City'
          value={selectedArea}
          onChange={item => setSelectedArea(item.value)}
          disable={!selectedCity}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('Screen2', { selectedCity, selectedArea })}
            disabled={!selectedCity || !selectedArea}
            color="#00665A"
          />
        </View>
      </View>
      <Button title="Logout" onPress={handleLogout} color="#D9534F" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0FFFD',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center'
  },
  card: {
    height: 350,
    justifyContent: 'center',
    backgroundColor: '#E0F9F6',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#00665A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#00665A',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
    color: 'black',
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: '#00665A',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FFFD'
  },
});

export default CityAreaScreen;
