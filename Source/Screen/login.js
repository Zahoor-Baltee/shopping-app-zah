import React, { useState } from 'react';
import {Text, TextInput, TouchableOpacity, View,StyleSheet} from 'react-native';
function MyLogInScreen({navigation}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
const UserLogIn=()=>{
    navigation.navigate("Home", {email:email,password:password})

}

  return (
    <>
      <View style={{height: 750, backgroundColor: 'black'}}>
        <View style={Styles.Screen3header}>
          <Text style={Styles.Screen3heading}>LogIn</Text>
        </View>
        <View style={Styles.Screen3header}>
          <Text style={Styles.Screen3text}>
            Please Enter Your Login And Password
          </Text>
        </View>
        <View style={Styles.Screen3main}>
          <View>
            <TextInput
              style={Styles.Screen3inp1}
              placeholder="Enter Email"
              placeholderTextColor="#adb5bd"
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <View>
            <TextInput
              style={Styles.Screen3inp1}
              placeholder="Enter Password"
              placeholderTextColor="#adb5bd"
              secureTextEntry={true}
              onChangeText={(e) => setPassword(e)}
              />
          </View>
          <View>
            <Text style={Styles.Screen3forgetText}>Forget Password?</Text>
          </View>
          <View>
            <TouchableOpacity onPress={UserLogIn} style={Styles.Screen3btns}>
              <Text style={{fontSize: 16, color: '#fff', textAlign: 'center'}}>
                LogIn
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 15,
            }}>
          </View>
        </View>
      </View>
    </>
  );
}
const Styles = StyleSheet.create({
    Screen3header:{
        paddingTop:60,
        height:100,
      },
      Screen3heading:{
        textAlign:"center",
        fontSize:36
      },
      Screen3text:{
        textAlign:"center",
        fontSize:18
      },
      Screen3main:{
        height:612,
        // backgroundColor:"green"
      },
      Screen3inp1:{
        border:"none",
       borderColor:"#2591d9",
       borderWidth:2,
        marginTop:30,
        marginHorizontal:30,
        color: "white",
        fontSize:18,
        borderRadius:40,
        padding:12,
        textAlign:"center",
    
      },
      Screen3forgetText:{
        color:"white",
        textAlign:'center',
        fontSize:18, 
        marginTop:22,
        marginBottom:22
        
      },
      Screen3btns:{
        border:"none",
        borderWidth:1,
        borderColor:"#38b000",
        borderRadius:40,
        marginHorizontal:100,
        paddingVertical:8
      },
})
export default MyLogInScreen