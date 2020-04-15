import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import yelp from '../api/yelp'
import userResults from '../hooks/useResults'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = userResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    whiteBackground: {
        flex: 1,
    },
    weHaveFound: {
        marginLeft: 15
    }
});

export default SearchScreen;