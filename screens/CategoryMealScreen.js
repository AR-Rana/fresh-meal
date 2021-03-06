import React from 'react';
import { CATEGORIES, MEALS } from './../data/dummy-data';
import MealList from './../components/MealList'

const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

    return <MealList dataList={displayedMeals} navigation={props.navigation} />
}


CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoryMealScreen;