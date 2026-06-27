import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage } from 'zustand/middleware';

const zustandStorage = createJSONStorage(() => AsyncStorage);

export default zustandStorage;