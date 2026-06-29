import { Text, View, Button } from 'react-native';
import useUserStore from '@/hooks/use-userstore';

const Page = () => {
    const {setIsGuest} = useUserStore();
    return(
        <View>
            <Text>My Page</Text>
            <Button title='login' onPress={() => setIsGuest(false)}/>
        </View>
        );  
    };

export default Page;