import { Colors, Fonts } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter, Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from 'react-native-reanimated';
import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import FontAwesom5 from '@expo/vector-icons/FontAwesome5'
import useUserStore from "@/hooks/use-userstore";

const Page = () => {
    const router = useRouter();
    const {setIsGuest} = useUserStore();

    const continueAsguest = () => {
      setIsGuest(true);  
    };

    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.closeBtn} onPress={() => router.dismiss}>
                <Ionicons name = 'close' size= {24} />
            </TouchableOpacity>
            <Text style = {styles.title}> Shey you get account abi you no get</Text>

            <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(120)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={styles.facebookButton}>
                <FontAwesom5 name="facebook" size={18} color={'#000000'}/>
                <Text style={styles.facebookButtonText}>Zuckerburg boy!!</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(400)}>
            <TouchableOpacity style={styles.otherButtons} onPress={continueAsguest}>
                <Text style={styles.otherButtonsText}> You be visitor!</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
    },
    closeBtn: {
        backgroundColor: Colors.light,
        borderRadius: 40,
        padding: 8,
        alignSelf: 'flex-end',
    },
    title:{
        fontSize: 30,
        fontFamily: Fonts.brandBlack,
        marginVertical: 22,
    },
      buttonContainer: {
    width: '100%', // Fixed from 100 to '100%' so buttons aren't squished
    gap: 12,
    },
     otherButtons: {
    alignItems: 'center',
    paddingVertical: 17,
    flexDirection:'row',
    justifyContent:'center',
    borderRadius: 17,
    gap: 4,
   
  },
  otherButtonsText: {
    fontSize: 18,
    color: Colors.secondary,
  },
   facebookButton: {
    backgroundColor: Colors.light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  facebookButtonText: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Page;