import { TextInput, Button, View, Text , Image, StyleSheet} from "react-native";
import { useState } from "react";
import Logo from "../logo/logo";
import React from "react";

export default Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const realizarLogin = () => {
        console.log('Email:', email);
        console.log('Senha:', password);
    };

    return (

        <View style={styles.caixa}>

           
            <TextInput
                placeholder="Email"
                style={styles.placeholder}
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCompleteType="email"
            />

            <TextInput
                placeholder="Senha"
                style={styles.placeholder}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <Button style={styles.botao}
                onPress={realizarLogin}
                title="Entrar"
                
                
            />

        </View>

    );
};

const styles = StyleSheet.create({
    caixa: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom:150,
        backgroundColor: "white",
        width: 300,
        borderRadius: 10,
    },
    logosenai: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    placeholder: {
        width: 250,
        height: 50,
        borderWidth: 0.6,
        borderColor: 'darkgrey',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 8,
        shadowColor: 'red',
        shadowOpacity:0,
        
        
    },
    botao: {
        padding: 16,
        alignContent: 'center',
        width: '100%',
        borderRadius: 10
        
    }
});

