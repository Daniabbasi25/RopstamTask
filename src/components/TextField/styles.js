import { StyleSheet, Dimensions} from 'react-native'
const {width,height}=Dimensions.get('window')
export const styles = StyleSheet.create({
inputfield:{
    borderWidth:1,
    width:width/1.1,
    alignSelf:'center',
    borderRadius:10,
    borderColor:'#CBD5E1',
    backgroundColor:'rgba(241, 245, 249, 0.4)',
    paddingLeft:20
},
label:{
    color:'#0F172A',
    fontWeight:'400',
    fontSize:15,
    marginLeft:15,
    marginBottom:10,
    marginTop:20

},
})