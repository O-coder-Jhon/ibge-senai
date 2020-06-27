import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight+20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 20,
        color: '#4169e1',
        fontWeight: 'bold',
    },
    logo:{
        resizeMode: 'center',
        marginLeft: -110,
    }
})