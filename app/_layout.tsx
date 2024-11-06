import { Stack , Slot} from "expo-router";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!





const InitialLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index"/>
        </Stack>
    )
}



 export default function RootLayout() {
  return (
     <ClerkProvider publishableKey={publishableKey}>
         <ClerkLoaded>
             <InitialLayout/>
         </ClerkLoaded>
     </ClerkProvider>
  )
}




