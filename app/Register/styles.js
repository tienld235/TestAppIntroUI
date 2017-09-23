import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    loginTextView: {
        alignSelf: 'flex-end',
        flex: 1
    },
    loginText: {
        fontSize: 20,
        color:'black',
        alignSelf: 'flex-end',
        flex: 1,
        marginTop: 35,
        textDecorationLine:'underline',
        fontWeight:'bold'
        
    },
    inputView: {
        marginTop: 90,
    },
    container:{
        paddingTop: 10,
        paddingRight:10
    }

})