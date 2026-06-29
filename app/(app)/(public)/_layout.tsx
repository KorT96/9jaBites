import { Stack } from 'expo-router';
const layout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, contentStyle: {backgroundColor: '#fff'} }} />
        <Stack.Screen name='other-options' 
        options ={{
          headerShown:false, 
          presentation:'formSheet', 
          title: '', 
          headerShadowVisible: false,
          sheetAllowedDetents:[0.6],
          sheetCornerRadius: 16}}
          />
    </Stack>
  );
};
export default layout;
