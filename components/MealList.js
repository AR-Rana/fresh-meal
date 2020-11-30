import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import MealItem from './MealItem'

const MealList = (props) => {

    const gotoMealDetail = (id) => {
        props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
                mealId: id
            }
        })
    }

    const renderMealItem = (itemData) => {
        return <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={() => gotoMealDetail(itemData.item.id)}
        />
    }


    return (
        <View style={styles.item}>
            <FlatList
                data={props.dataList}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
})

export default MealList;