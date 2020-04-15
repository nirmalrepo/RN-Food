import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import yelp from '../api/yelp'
import userResults from '../hooks/useResults'
import { FlatList } from 'react-native-gesture-handler'


const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(result)
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);

    }
    useEffect(() => {
        getResult(id)
    }, [])

    if(!result){
        return null;
    }
    return (
        <>
            <Text style = {styles.title}>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor ={(photo) => photo}
                renderItem = {({item}) => {
                    return <Image style = {styles.image} source = {{uri: item}}/>
                }}
            />

        </>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    image: {
        height: 200,
        width: 300,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 5,
    }
});

export default ResultShowScreen;