import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DropdownSelector = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedCity, setSelectedCity] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedShop, setSelectedShop] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://test-66540.firebaseio.com/.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
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

    if (loading) return <ActivityIndicator size ='large' style={styles.loader} />;
    if (error) return <Text style={styles.errorText}>Error: {error}</Text>;

    // Extract Cities
    const cities = data?.city ? data.city.map(city => ({ label: city.name, value: city.id })) : [];
    
    // Extract Areas based on selected city
    const areas = selectedCity 
        ? data?.area.filter(area => area.city_id === selectedCity).map(area => ({ label: area.area, value: area.id }))
        : [];

    // Extract Categories
    const categories = data?.category ? data.category.map(cat => ({ label: cat.name, value: cat.id })) : [];

    // Extract Shops based on selected category
    const shops = selectedCategory 
        ? data?.shops.filter(shop => shop.cat_id === selectedCategory).map(shop => ({ label: shop.name, value: shop.id }))
        : [];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Select a Location</Text>

            {/* City Dropdown */}
            <Text style={styles.label}>City:</Text>
            <Picker
                selectedValue={selectedCity}
                onValueChange={(cityValue) => {
                    setSelectedCity(cityValue);
                    setSelectedArea('');
                    setSelectedCategory('');
                    setSelectedShop('');
                }}
                style={styles.picker}
            >
                <Picker.Item label="Select City" value="" />
                {cities.map(city => (
                    <Picker.Item key={city.value} label={city.label} value={city.value} />
                ))}
            </Picker>
            {/* <Text>{cityValue}</Text> */}


            {/* Area Dropdown */}
                <>
                    <Text style={styles.label}>Area:</Text>
                    <Picker
                        selectedValue={selectedArea}
                        onValueChange={(areaValue) => {
                            setSelectedArea(areaValue);
                            setSelectedCategory('');
                            setSelectedShop('');
                        }}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select Area" value="" />
                        {areas.map(area => (
                            <Picker.Item key={area.value} label={area.label} value={area.value} />
                        ))}
                    </Picker>
                </>
            

            {/* Category Dropdown */}
            <Text style={styles.label}>Category:</Text>
            <Picker
                selectedValue={selectedCategory}
                onValueChange={(catValue) => {
                    setSelectedCategory(catValue);
                    setSelectedShop('');
                }}
                style={styles.picker}
            >
                <Picker.Item label="Select Category" value="" />
                {categories.map(category => (
                    <Picker.Item key={category.value} label={category.label} value={category.value} />
                ))}
            </Picker>

            {/* Shop Dropdown */}

                <>
                    <Text style={styles.label}>Shop:</Text>
                    <Picker
                        selectedValue={selectedShop}
                        onValueChange={(shopValue) => setSelectedShop(shopValue)}

                        style={styles.picker}
                    >
                        <Picker.Item label="Select Shop" value="" />
                        {shops.map(shop => (
                            <Picker.Item key={shop.value} label={shop.label} value={shop.value} />
                        ))}
                    </Picker>
                </>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex:1,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
    },
    picker: {
        height: 55,
        marginBottom: 10,
        backgroundColor: 'beige',
        borderWidth: 2,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    loader:{
        color: 'blue',
        flex:1,
        justifyContent: 'center'   
    }
});

export default DropdownSelector;








