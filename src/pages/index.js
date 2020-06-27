import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import styles from './style';
import Logo from '../assets/logo.png';

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={Logo} />
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Aplicativo de nomes do IBGE</Text>
                <TextInput placeholder='Digite o seu nome'onChangeText={(name) => {setName(name);}} placeholderTextColor='#fff' style={styles.input} />
                <TextInput placeholder='Digite sua data de nascimento'onChangeText={(age) => {setName(age);}} placeholderTextColor='#fff' style={styles.input} />
            </View>
        </View> 
   )
}