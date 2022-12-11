import { StyleSheet,Dimensions } from 'react-native'
const {width,height}=Dimensions.get('window')

export const styles = StyleSheet.create({
    primaryButton:{
        // marginLeft:width/8,
        width:width/1.1,
        backgroundColor:'#52B6DF',
        textAlign:'center',
        paddingVertical:height/50,
        color:'#fff',
        borderRadius:10,
        fontSize:17,
        fontWeight:'600',
        alignSelf:'center',
       
    }
})