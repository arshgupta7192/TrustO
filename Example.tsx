

// import { View, Text } from 'react-native';
// import MaskedView from '@react-native-masked-view/masked-view';
// import LinearGradient from 'react-native-linear-gradient';

// export default function TintedText() {
//   return (
//     <MaskedView
//       maskElement={
//         <Text
//           style={{
//             fontSize: 40,
//             fontWeight: 'bold',
//             color: 'black', // Mask needs solid color
//           }}
//         >
//           Hello World🍑
//         </Text>
//       }
//     >
//       <LinearGradient
//         colors={['#00665A', '#00665A']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//       >
//         <Text style={{ opacity: 0, fontSize: 40, fontWeight: 'bold' }}>
//           Hello World🍑
//         </Text>
//       </LinearGradient>
//     </MaskedView>
//   );
// }









// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import MaskedView from '@react-native-masked-view/masked-view';
// import LinearGradient from 'react-native-linear-gradient';

// const CategoryScreen = ({ navigation, route }) => {
//     const { selectedArea } = route.params;
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://test-66540.firebaseio.com/.json');
//                 if (!response.ok) throw new Error('Failed to fetch data');
//                 const jsonData = await response.json();
//                 setData(jsonData);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);

//     if (loading) return <ActivityIndicator size="large" style={styles.loader} />;
//     if (error) return <Text style={styles.errorText}>Error: {error}</Text>;

//     const categories = data?.category || [];
//     const shops = data?.shops || [];

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             {categories.length > 0 ? (
//                 categories.map((category) => (
//                     <View key={category.id} style={styles.categoryContainer}>
                        
//                         {/* Gradient Tint Text with Emoji */}
//                         <MaskedView
//                             maskElement={
//                                 <Text style={styles.categoryText}>{category.name}</Text>
//                             }
//                         >
//                             <LinearGradient
//                                 colors={['#00665A', '#00A693']}
//                                 start={{ x: 0, y: 0 }}
//                                 end={{ x: 1, y: 0 }}
//                             >
//                                 <Text style={[styles.categoryText, { opacity: 0 }]}>{category.name}</Text>
//                             </LinearGradient>
//                         </MaskedView>

//                         <ScrollView horizontal={true} style={styles.shops}>
//                             {shops.filter(shop => shop.cat_id === category.id && shop.area_id === selectedArea).length > 0 ? (
//                                 shops
//                                     .filter(shop => shop.cat_id === category.id && shop.area_id === selectedArea)
//                                     .map((shop) => (
//                                         <TouchableOpacity
//                                             key={shop.id}
//                                             onPress={() => navigation.navigate('Screen3', { shop })}
//                                             style={styles.shopItem}
//                                         >
//                                             <Text style={styles.shopText}>{shop.name}</Text>
//                                         </TouchableOpacity>
//                                     ))
//                             ) : (
//                                 <Text style={styles.noShopText}>No shops available</Text>
//                             )}
//                         </ScrollView>
//                     </View>
//                 ))
//             ) : (
//                 <Text>No categories available</Text>
//             )}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingLeft: 5,
//         alignItems: 'center',
//         backgroundColor: '#F0FFFD',
//     },
//     categoryContainer: {
//         marginTop: 10,
//         padding: 5,
//         borderRadius: 8,
//     },
//     categoryText: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         marginBottom: 2,
//         textAlign: 'center',
//     },
//     shops: {
//         height: 80,
//         marginTop: 2,
//     },
//     shopItem: {
//         padding: 11,
//         marginTop: 10,
//         marginLeft: 5,
//         backgroundColor: '#D6F4ED',
//         marginVertical: 5,
//         borderRadius: 5,
//         height: 60,
//         width: 110,
//         flex: 1,
//         justifyContent: 'center',
//         borderWidth: 1,
//         elevation: 2,
//     },
//     shopText: {
//         fontSize: 12,
//         textAlign: 'center',
//         color: '#001935'
//     },
//     noShopText: {
//         fontSize: 12,
//         paddingTop: 10,
//         paddingLeft: 5,
//         color: 'gray',
//         fontStyle: 'italic',
//         marginLeft: 10,
//     },
//     errorText: {
//         color: 'red',
//         fontSize: 16
//     },
//     loader: {
//         flex: 1,
//         justifyContent: 'center'
//     },
// });

// export default CategoryScreen;

