import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'



const ResultsList = ({ results, title, navigation }) => {
    if (!results.length) {
        return null;
    }
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }

                }
                style={styles.FlatList}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 15,
    },
    FlatList: {
        marginBottom: 15,
    }
});

export default withNavigation(ResultsList);