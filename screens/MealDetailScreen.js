import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './../components/HeaderButton'

import { MEALS } from './../data/dummy-data';

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');

    const selectedmeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View>
            <Text>This is meal detals screen</Text>
        </View>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedmeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedmeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Fav" iconName='ios-star-outline' onPress={() => {
                console.log("fav click");
            }} />
        </HeaderButtons>
    }
}


const styles = StyleSheet.create({})


export default MealDetailScreen;