import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';


const CategoryScreen = ({ navigation, route }) => {
    const { selectedArea } = route.params;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    const categories = data?.category || [];
    const shops = data?.shops || [];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ScrollView>

                {categories.length > 0 ? (
                    categories.map((category) => (
                        <View key={category.id} style={styles.categoryContainer}>

                    <MaskedView
                            maskElement={
                                <Text style={styles.categoryText}>{category.name}</Text>
                            }
                        >
                        <LinearGradient
                            colors={['#00665A', '#00A693']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={[styles.categoryText, { opacity: 0 }]}>{category.name}</Text>
                        </LinearGradient>
                    </MaskedView>
                            <ScrollView horizontal={true} style={styles.shops}>

                                {shops.filter(shop => shop.cat_id === category.id && shop.area_id === selectedArea).length > 0 ? (
                                    shops
                                        .filter(shop => shop.cat_id === category.id && shop.area_id === selectedArea)
                                        .map((shop) => (
                                            <TouchableOpacity
                                                activeOpacity={0.6}
                                                key={shop.id}
                                                onPress={() => navigation.navigate('Screen3', { shop })}
                                                style={styles.shopItem}
                                            >
                                                <Text style={styles.shopText}>{shop.name}</Text>
                                            </TouchableOpacity>
                                        ))
                                ) : (
                                    <Text style={styles.noShopText}>No shops available</Text>
                                )}

                            </ScrollView>
                        </View>
                    ))
                ) : (
                    <Text>No categories available</Text>
                )}
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 5,
        backgroundColor: '#F0FFFD',
    },
    categoryContainer: {
        marginTop: 10,
        padding: 5,
        borderRadius: 8
    },
    categoryText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'black'
    },
    shops: {
        height: 80,
        marginTop: 2,
    },
    shopItem: {
        padding: 11,
        marginTop: 10,
        marginLeft: 5,
        backgroundColor: '#E0F9F6',
        marginVertical: 5,
        borderRadius: 5,
        height: 60,
        width: 110,
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
    },
    shopText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#00665A'
    },
    noShopText: {
        fontSize: 12,
        paddingTop: 10,
        paddingLeft: 5,
        color: 'gray',
        fontStyle: 'italic',
        marginLeft: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 16
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F0FFFD'
    },
});

export default CategoryScreen;










// ---------------------------------------{Easy Code}----------------------------------------------


// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// const CategoryScreen = ({ navigation }) => {
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

//     // Extract Categories
//     const categories = data?.category || [];

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Text style={styles.heading}>Categories</Text>

//             {categories.map((category) => {
//                 // Filter shops under this category
//                 const categoryShops = data?.shops.filter(shop => shop.cat_id === category.id) || [];

//                 return (
//                     <View key={category.id} style={styles.categoryContainer}>
//                         <Text style={styles.categoryTitle}>{category.name}</Text>

//                         {/* Horizontal ScrollView for Shops */}
//                         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.shopScrollView}>
//                             {categoryShops.map(shop => (
//                                 <TouchableOpacity
//                                     key={shop.id}
//                                     style={styles.shopItem}
//                                     onPress={() => navigation.navigate('Screen3', { shop })}
//                                 >
//                                     <Text style={styles.shopName}>{shop.name}</Text>
//                                 </TouchableOpacity>
//                             ))}
//                         </ScrollView>
//                     </View>
//                 );
//             })}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flexGrow: 1, padding: 20, backgroundColor: '#f5f5f5' },
//     heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//     categoryContainer: { marginBottom: 20, padding: 10, backgroundColor: '#fff', borderRadius: 10 },
//     categoryTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#333' },
//     shopScrollView: { flexDirection: 'row', paddingBottom: 10 },
//     shopItem: {
//         padding: 15,
//         backgroundColor: '#e0e0e0',
//         marginRight: 10,
//         borderRadius: 8,
//         width: 150, // Set width to fit content properly
//         alignItems: 'center',
//     },
//     shopName: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
//     errorText: { color: 'red', fontSize: 16 },
//     loader: { flex: 1, justifyContent: 'center' },
// });

// export default CategoryScreen;
