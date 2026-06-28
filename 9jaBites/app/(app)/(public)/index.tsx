import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import { Fonts } from "@/constants/theme";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Index() {
  const openWebBrowser = () => {
   Linking.openURL('https://google.com').catch((err) => 
      console.error("Couldn't load page", err)
    );
    };
  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer} />
      <View style={styles.contentContainer}>
        <Image source={require('@/assets/images/logo.png')} style={styles.brandlogo}/>
        <Animated.Text entering={FadeInDown} style={styles.tag}>
          You Order, We Deliver Sharpally
        </Animated.Text>

        {/* login Buttons */}
        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(120)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={styles.otherButtons}>
              <Text style={styles.otherButtonsText}>Na wa, No Apple or Google. chai!</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.View style = {styles.privacyContainer} entering ={FadeInDown.delay(400)}>
          <Text style = {styles.privacyText}>
            Please visit {' '}
            <Text style = {styles.privacyLink} onPress={openWebBrowser}>
              9jaBites Privacy Statement
              </Text> {' '}
            </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  brandlogo: {
    width: '100%',
    height: 48,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  tag: {
    fontSize: 30,
    fontFamily: Fonts.brandBlack,
    textAlign: 'center',
    marginBottom: 50,
    lineHeight: 36,
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
    backgroundColor: '#f0f0f0',
  },
  otherButtonsText: {
    fontSize: 18,
    color: '#666',
  },
  scrollContainer: {
    flex: 0.4, // Adjusted layout distribution
  },
  privacyContainer: {
    marginTop:30,
    paddingHorizontal:20,
  },
  privacyText: {
    fontSize: 12, 
    color: '#999',
    textAlign: 'center',
    lineHeight: 18,
  },
  privacyLink: {
    color: '#4285F4',
    textDecorationLine: 'underline',
  },
});