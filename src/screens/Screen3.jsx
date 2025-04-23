import React from 'react';
import React, { useLayoutEffect } from 'react';

import { View, Text, StyleSheet, FlatList, Image, ImageBackground, ScrollView } from 'react-native';


const ShopDetailsScreen = ({ route, navigation }) => {
    const { shop } = route.params;

  // Set the header title dynamically
  useLayoutEffect(() => {
    navigation.setOptions({
      title: shop.name,
    });
  }, [navigation, shop.name]);

    return (
        <View style={styles.container}>

        <ScrollView
          horizontal
        >
            <Image
              source={{
                uri: 'https://imgs.search.brave.com/C_j0xD1p0t00IkdEGBp3Hn2OxYA4WsYZtlTPMytX6B4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzU1LzUwLzgz/LzM2MF9GXzE1NTUw/ODMwM195ODFCaTRH/ZU1DTjlJMDJQSFJI/SU44MlpLUnFQbWlk/YS5qcGc'
              }} style={styles.cardImage}
              />
            <Image
              source={{
                uri: 'https://imgs.search.brave.com/C_j0xD1p0t00IkdEGBp3Hn2OxYA4WsYZtlTPMytX6B4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzU1LzUwLzgz/LzM2MF9GXzE1NTUw/ODMwM195ODFCaTRH/ZU1DTjlJMDJQSFJI/SU44MlpLUnFQbWlk/YS5qcGc'
              }} style={styles.cardImage}
              />
            <Image
              source={{
                uri: 'https://imgs.search.brave.com/C_j0xD1p0t00IkdEGBp3Hn2OxYA4WsYZtlTPMytX6B4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzU1LzUwLzgz/LzM2MF9GXzE1NTUw/ODMwM195ODFCaTRH/ZU1DTjlJMDJQSFJI/SU44MlpLUnFQbWlk/YS5qcGc'
              }} style={styles.cardImage}
              />
        </ScrollView>

            {/* <Text style={styles.detail}>Category ID: <Text style={styles.sub}>{shop.cat_id}</Text></Text>  */}

            <Text style={styles.detail}>Location: <Text style={styles.sub}>{shop.address}</Text></Text>
            {/* <Text style={styles.sub}>{shop.address}</Text>  */}

            <Text style={styles.contact}>Email✉️: <Text style={styles.sub}>{shop.email}</Text></Text>

            <Text style={styles.contact}>Contact📞: <Text style={styles.sub}>{shop.contact_no}</Text></Text>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      // justifyContent: 'center', 
      // alignItems: 'center', 
      padding: 15 ,
      backgroundColor: '#F0FFFD',
    },
    detail: { 
      fontSize: 16, 
      marginTop: 20, 
      fontWeight: 500,
      color: '#00665A',
      fontWeight: 'bold',
      fontFamily: 'monospace',
    },
    sub:{
      fontSize: 13,
      marginTop: 4,
      color: '#555',
      textAlign: 'center',
    },
    contact: {
      fontSize: 16, 
      marginTop: 20, 
      fontWeight: 500,
      color: '#00665A',
      fontWeight: 'bold',
      fontFamily: 'monospace',
    },
    cardImage:{
      height:410,
      width:300,
      borderRadius: 4,
      margin:5,
  },
});

export default ShopDetailsScreen;













// import React, { useLayoutEffect } from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// const ShopDetailsScreen = ({ route, navigation }) => {
//   const { shop } = route.params;

//   // Set the header title dynamically
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: shop.name,
//     });
//   }, [navigation, shop.name]);

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.shopName}>{shop.name}</Text> */}

//       <ScrollView horizontal>
//         <Image
//           source={{
//             uri: 'https://imgs.search.brave.com/C_j0xD1p0t00IkdEGBp3Hn2OxYA4WsYZtlTPMytX6B4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzU1LzUwLzgz/LzM2MF9GXzE1NTUw/ODMwM195ODFCaTRH/ZU1DTjlJMDJQSFJI/SU44MlpLUnFQbWlk/YS5qcGc'
//           }}
//           style={styles.cardImage}
//         />
//         {/* You can duplicate above <Image /> or map through an image list if needed */}
//       </ScrollView>

//       <Text style={styles.detail}>Location: <Text style={styles.sub}>{shop.address}</Text></Text>
//       <Text style={styles.contact}>Email✉️: <Text style={styles.sub}>{shop.email}</Text></Text>
//       <Text style={styles.contact}>Contact📞: <Text style={styles.sub}>{shop.contact_no}</Text></Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: '#F0FFFD',
//   },
//   shopName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#00665A',
//     textAlign: 'center',
//   },
//   detail: {
//     fontSize: 16,
//     marginTop: 20,
//     fontWeight: 'bold',
//     color: '#00665A',
//     fontFamily: 'monospace',
//   },
//   sub: {
//     fontSize: 13,
//     marginTop: 4,
//     color: '#555',
//     textAlign: 'center',
//   },
//   contact: {
//     fontSize: 16,
//     marginTop: 20,
//     fontWeight: 'bold',
//     color: '#00665A',
//     fontFamily: 'monospace',
//   },
//   cardImage: {
//     height: 410,
//     width: 300,
//     borderRadius: 4,
//     margin: 5,
//   },
// });

// export default ShopDetailsScreen;
