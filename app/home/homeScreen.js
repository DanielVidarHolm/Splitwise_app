import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Bill, People, Tips, Total } from '../../components'
import {COLORS, SIZES} from '../../constants'

const Home = () => {
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightGreen}}>
            <Stack.Screen 
                options={{
                    title:'Splitwise',
                    headerStyle: {
                        backgroundColor:COLORS.lightGreen,
                        
                    },
                    headerTitleAlign:'center',
                    headerShadowVisible:false,
                }}
            />
            <SafeAreaView style={styles.container}>
                <Bill></Bill>
            </SafeAreaView>
            
           
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width:SIZES.col9, 
        backgroundColor: COLORS.white,
        alignSelf:'center',
        padding: SIZES.largePadding,
        borderRadius:20,
        shadowColor:'black',
        elevation:40,
        marginTop:80,
    }
})
export default Home