import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from './../data/dummy-data';
import MealList from './../components/MealList';
import HeaderButton from './../components/HeaderButton';

const FavoritesScreen = (props) => {

    const displayedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2' || meal.id === 'm4');


    return <MealList dataList={displayedMeals} navigation={props.navigation} />
}


// FavoritesScreen.navigationOptions = {
//     headerTitle: 'You Favorites'
// }

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'You Favorites',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item name='Menu' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} />
        </HeaderButtons>
    }
}

export default FavoritesScreen;