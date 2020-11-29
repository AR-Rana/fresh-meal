import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
    TouchableNativeFeedback
} from 'react-native'

const CategoryGridTile = (props) => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gritItem}>
            <TouchableCmp onPress={props.select} style={{flex: 1}}>
                <View style={{ ...styles.itemContainer, ...{ backgroundColor: props.color } }} >
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}


const styles = StyleSheet.create({
    gritItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 5
    },
    itemContainer: {
        flex: 1,
        borderRadius: 10,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'right'
    }
})


export default CategoryGridTile