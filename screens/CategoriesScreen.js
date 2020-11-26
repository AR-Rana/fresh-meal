import React from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { CATEGORIES } from './../data/dummy-data'
import CategoryGridTile from './../components/CategoryGridTile'

const CategoriesScreen = (props) => {
    const gotoCategorymeals = (id) => {
        props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
                categoryId: id
            }
        })
    }

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                select={() => gotoCategorymeals(itemData.item.id)} />
        )
    }
    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem} />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

export default CategoriesScreen

