import React from 'react'
import { FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from './../data/dummy-data'
import CategoryGridTile from './../components/CategoryGridTile'
import HeaderButton from './../components/HeaderButton'

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

// CategoriesScreen.navigationOptions = {
//     headerTitle: 'Meal Categories',
//     headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
//         <Item name='Menu' iconName='ios-menu' onPress = {() => {}} />
//     </HeaderButtons>
// }

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item name='Menu' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} />
        </HeaderButtons>
    }
}

export default CategoriesScreen;