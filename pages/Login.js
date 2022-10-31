import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import { auth } from '../firebase';

const Register = () => {
    const navigation = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlerRegister = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.regForm}>
                <Image source={require('../assets/Frog-_-.png') } style={styles.frog}/>
                <Text style={styles.huak}>HUAK</Text>
                <View style={styles.password}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'account-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='username'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}   
                        style={styles.textInput}
                        //เก็บค่าที่รับ
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.password}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'lock-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='password'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10} 
                        style={styles.textInput}  
                        secureTextEntry={isSecureEntry}
                        //เก็บค่าที่รับ
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity
                        style={styles.btnEye}
                        onPress={() => {
                            setIsSecureEntry(!isSecureEntry)
                        }}
                    >
                        <MaterialCommunityIcons 
                            name={isSecureEntry === false ? 'eye-outline' : 'eye-off-outline'}
                            size={20}
                            color='lightgrey'
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress = {() => navigation.navigate('Timeline', {}) } style={styles.button}>
                    <Text style={styles.btnRegister}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('Register', {}) }>
                    <Text style={styles.btnLogin}>
                        Create Account? Register Here!
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    regForm: {
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    container: {
        flex: 3,
        backgroundColor: '#1b8057',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        alignSelf: 'stretch',
        fontSize: 15,
        color: '#ede9a3',
        fontWeight: 'bold',
        width:'100%',
        left: -2
    },
    frog: {
        width: 100,
        height: 100,
    },
    huak: {
        alignItems: 'center',
        color: '#ede9a3',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: -15
    },
    button:{
        padding: 5,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 5,
        backgroundColor: '#7CB96E',
        borderRadius: 30
    },
    btnRegister: {
        fontSize: 15,
        color: '#064635',
        fontWeight: 'bold',
    },
    buttonLogin:{
        position: 'absolute'
    },
    btnLogin: {
        fontSize: 15,
        color: '#ede9a3',
        marginTop: 10,
        fontWeight: 'bold',
    },
    password: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        fontSize: 15,
        color: '#ede9a3',
        height: 35,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 12,
        borderColor: '#ede9a3',
        borderWidth: 2,
        borderRadius: 10,
    },
    btnEye: {
        top: 5,
        left: -48
    },
    icon: {
        top: 5,
        left: 4
    }
})

export default Register