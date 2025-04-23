// Data of Firebase Fetched in this Code 


import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

const DropdownSelector = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
              console.log(setError);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <ActivityIndicator size="large" color="blue" />;
    if (error) return <Text>Error: {error}</Text>;

    return (
        <ScrollView style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Fetched Data:</Text>
            <Text>{JSON.stringify(data, null, 2)}</Text>
        </ScrollView>
    );
};

export default DropdownSelector;
