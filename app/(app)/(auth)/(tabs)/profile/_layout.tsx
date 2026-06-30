import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

const Layout = () =>{
    return(
        <Stack screenOptions={{contentStyle: {backgroundColor: '#fff'}}}> 
            <Stack.Screen 
            name = 'index'
            options= {{title: 'Profile', headerLargeTitle: true, headerTransparent: true
            }}/>
        </Stack>   
     );
};

export default Layout;