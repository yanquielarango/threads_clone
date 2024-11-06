import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import {useOAuth} from "@clerk/clerk-expo";
import {Colors} from "@/constants/Colors";
import {Ionicons} from "@expo/vector-icons";


export default function Index() {
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_facebook'});
    const { startOAuthFlow: startOAuthFlowGoogle } = useOAuth({ strategy: 'oauth_google'});

    const handleFacebookLogin = async () => {
        try {
            const { createdSessionId, setActive } = await startOAuthFlow()
            console.log('handleFacebookLogin:', createdSessionId)
            if (createdSessionId) {
                setActive!({session: createdSessionId})
            }
        } catch (e) {
            console.error(e)
        }
    }


    const handleGoogleLogin = async () => {
        try {
            const { createdSessionId, setActive } = await startOAuthFlowGoogle()
            console.log('handleGoogleLogin:', createdSessionId)
            if (createdSessionId) {
                setActive!({session: createdSessionId})
            }
        } catch (e) {
            console.error(e)
        }
    }


    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/login.png')} style={styles.loginImage}/>
            <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>How would like to use Threads?</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={handleFacebookLogin}>
                   <View style={styles.loginButtonContent}>
                    <Image source={require('@/assets/images/facebook.png')} style={styles.loginButtonIcon}/>
                    <Text style={styles.loginButtonText}>Continue with Facebook</Text>
                       <Ionicons name="chevron-forward" size={24} color={Colors.border}/>
                   </View>
                   <Text style={styles.loginButtonSubtitle}>
                       Log in or create a Threads profile with your Facebook account.
                       With a profile, you can post, interact and get personalized recommendations.
                   </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={handleGoogleLogin}>
                   <View style={styles.loginButtonContent}>
                    <Image source={require('@/assets/images/google.png')} style={styles.loginButtonIcon}/>
                    <Text style={styles.loginButtonText}>Continue with Google</Text>
                       <Ionicons name="chevron-forward" size={24} color={Colors.border}/>
                   </View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton}>
                   <View style={styles.loginButtonContent}>
                    <Text style={styles.loginButtonText}>Use without a profile</Text>
                       <Ionicons name="chevron-forward" size={24} color={Colors.border}/>
                   </View>
                    <Text style={styles.loginButtonSubtitle}>
                        You can use Threads without a profile, but won't be able to post,
                        interact or  get personalized recommendations.
                    </Text>

                </TouchableOpacity>

            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: "center",
        backgroundColor: Colors.background
    },
    loginImage: {
        width: '100%',
        height: 350,
        resizeMode: 'cover'
    },
    title: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 17,

    },
    loginButton: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.border
    },
    buttonContainer: {
        gap: 20,
        marginHorizontal: 20
    },
    loginButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    loginButtonIcon: {
        width: 50,
        height: 50
    },
    loginButtonText: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 15,
        flex: 1,
    },
    loginButtonSubtitle: {
        fontFamily: 'DMSans_400Regular',
        fontSize: 12,
        marginTop: 5,
    }

})