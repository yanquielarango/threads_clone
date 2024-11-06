import {useEffect} from "react";
import {LogBox} from "react-native";
import { Slot} from "expo-router";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import {tokenCache} from "@/utils/cache";
import {useFonts} from "expo-font";
import {DMSans_400Regular, DMSans_500Medium, DMSans_700Bold} from "@expo-google-fonts/dm-sans";
import * as SplashScreen from 'expo-splash-screen';


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!


LogBox.ignoreLogs(['Clerk: Clerk has been loaded with  development keys'])

// Prevent auto hide splash screen
SplashScreen.preventAutoHideAsync();


const InitialLayout = () => {
    const  [fontsLoaded] = useFonts({
        DMSans_400Regular,
        DMSans_500Medium,
        DMSans_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    },[fontsLoaded])

    return (
        <Slot/>
    )
}



 export default function RootLayout() {
  return (
     <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
         <ClerkLoaded>
             <InitialLayout/>
         </ClerkLoaded>
     </ClerkProvider>
  )
}




