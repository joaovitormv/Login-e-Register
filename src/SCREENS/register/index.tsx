import React, {useState} from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native';
import {MaterialIcons, Entypo, Ionicons} from "@expo/vector-icons";
import {styles} from "./style"
import { LoginTypes } from '../../navigations/login.navigation';
import { ButtonInterface } from '../../components/button';

export interface IRegister{
    name?: string
    email?: string
    password?: string
}

export function Register({navigation}: LoginTypes){
    const [data, setData] = useState<IRegister>();
    async function handleRegister(){
        if (data?.email && data.name && data.password){
            console.log(data)
        }else{
            Alert.alert("Preencha todos os campos!")
        }
    }
    function handleGoBack(){
        navigation.navigate('Login')
    }
    function handleChange(item: IRegister){
        setData({...data, ...item});
    }
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text>Logo</Text>
                <View style={styles.formRow}>
                    <Ionicons name="person" style={styles.icon}/>
                    <TextInput
                        placeholderTextColor={"gray"}
                        style={styles.input}
                        placeholder='Nome'
                        onChangeText={(i) => handleChange({name: i})}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon}/>
                    <TextInput
                    placeholderTextColor={"gray"}
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={(i) => handleChange({email: i})}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="key" style={styles.icon}/>
                    <TextInput
                    placeholderTextColor={"gray"}
                    style={styles.input}
                    placeholder='Senha'
                    autoCapitalize='none'
                    secureTextEntry= {true}
                    onChangeText={(i) => handleChange({password: i})}
                    />
                </View>
                <ButtonInterface title='REGISTER' onPressI={handleRegister}/>
                <ButtonInterface title='VOLTAR' onPressI={handleGoBack}/>
            </KeyboardAvoidingView>

        </View>
    )
}