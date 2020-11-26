import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { CATEGORIES } from './../data/dummy-data'

const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const gotoMealDetail = () => {
        props.navigation.navigate({ routeName: 'MealDetail' })
    }
    return (
        <View>
            <Text>This is category meal screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Meal Details" onPress={gotoMealDetail} />
        </View>
    )
}


CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    }
}


const styles = StyleSheet.create({})


export default CategoryMealScreen;