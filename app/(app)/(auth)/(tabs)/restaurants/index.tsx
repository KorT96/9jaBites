import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Restaurants = () =>{
    return(
        <SafeAreaView style = {styles.safeArea}>
            <ScrollView contentInsetAdjustmentBehavior='automatic'style ={styles.container}>
                <Text>restaurants</Text>
            </ScrollView>
        </SafeAreaView>
        );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    safeArea: {flex: 1,
        backgroundColor: '#fff',

    }
});

export default Restaurants;