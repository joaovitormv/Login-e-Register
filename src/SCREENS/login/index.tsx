import React, {useState} from 'react';
import {KeyboardAvoidingView, View, Text, Textinput, Alert} from 'react-native';
import {MaterialIcons, Entypo} from "@expo/vector-icons";
//styles
import {ButtonInterface} from "../../components/button"
import {LoginTypes} from "../../navigations/login.navigation"

export interface IAuthenticate{
    email?: string;
    password?: string;
}
export function Login({navigation}: LoginTypes){
    const [data, setData] = useState<IAuthenticate>();
    async function handleSignIn(){
        if (data?.email && data.password){
            console.log(data)
        }else{
            Alert.alert("Preenche todos os campos!!!!");
        }
    }
    function handleRegister(){
        navigation.navigate("Register")
    }
    function handleChange(item: IAuthenticate){
        setData({...data, ...item});
    }
    return(
        <View style={style.container}>
            <KeyboardAvoidingView>
            </KeyboardAvoidingView>
        </View>
    )