import { View, Text, StyleSheet } from 'react-native';
import { CategoryList } from '../CategoryList';
import RestaurantList from '../RestaurantList';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Fonts } from '@/constants/theme';

const Restaurants = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style ={styles.container}>
            <Animated.ScrollView showsVerticalScrollIndicator = {false}
            contentContainerStyle ={{paddingTop:insets.top + 60}}>
                <Text style ={styles.pageTitle}> Food Joints</Text>
                <CategoryList/>

                <Text style ={styles.allRestaurantsTitle}>All Restaurants</Text>
                <RestaurantList/>
            </Animated.ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    pageTitle:{
        fontFamily: Fonts.brandBlack,
        fontSize: 30,
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    allRestaurantsTitle:{
         fontFamily: Fonts.brandBold,
        fontSize: 22,
        marginBottom: 16,
        paddingHorizontal: 16,
    },
}); 
export default Restaurants