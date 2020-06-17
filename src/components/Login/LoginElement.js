import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const performAction = (navigation,action) => {
    if(action === 'registeredMail'){
        console.log('function called')
        navigation.navigate('signInWithRegisteredEmail')
    }
        
    else if(action === 'google')
        {
            //api integration for google Login
        }
    else {
        //api integration for facebook login
         }
}
const LoginElement=(props) =>{

return(
    <View style={styles.container}>
                <View style={styles.icon}>
                    <FontAwesome
                        name={props.iconName}
                        color="black"
                        size={28}
                        ></FontAwesome>
                </View>
                <View style={{flex:0.5}}>
                    <Text style={styles.seperator}>|</Text>
                </View>
                <View style={{flex:3}}>
                    <TouchableOpacity  onPress={()=>performAction(props.navigation,props.action)}>
                    <Text >{props.title}</Text>
                    </TouchableOpacity>
                </View>
               
        </View>
);
}
const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: "25%",
        padding:5,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:8
    },
    seperator:{
        fontSize:32,
        color:'grey'
    },
    icon:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});
export default LoginElement;