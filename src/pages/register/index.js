import React, { useState, useEffect } from "react";
import { Video } from "expo-av";
import {StyleSheet, StatusBar, View, Text, TextInput, Image, Alert} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { normalize } from "../../services/normalize";
import { Screen, ButtonLogin, Input, ViewOptions, Option, Logo } from "./styles";
import { white, metalBlue, logoGradientInit, logoGradientEnd } from '../../utils/color';
import api from "../../services/api";
import {login} from "../../services/auth";
import {CommonActions} from "@react-navigation/native";

export default ({ navigation }) => {
    let [email, setEmail] = useState("");
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const makeRegister = async () => {
        if (username.length === 0 ||email.length === 0 || password.length === 0) {
            Alert.alert('Preencha os campos para se cadastrar!');
        } else if(password.length < 8) {
            Alert.alert('O campo de senha deve conter no minimo 8 caracteres');
        }else {
            try {
                const response = await api.post('/api/user', {
                    name: username,
                    email,
                    password,
                });
                Alert.alert('Usuário cadastrado com sucesso!');
                const resetAction = CommonActions.reset({
                    index: 0,
                    routes: [
                        {name: 'Home'},
                    ]
                });
                navigation.dispatch(resetAction);
            } catch (_err) {
                console.log(_err)
                Alert.alert('Houve um problema com o login, verifique suas credenciais!');
            }
        }
    }
    return (
        <Screen>
            <Video
                source={{
                    uri:
                        "https://v.pinimg.com/videos/mc/720p/d1/89/cf/d189cf1c29fe6c58bb1c760a86fa74d5.mp4",
                }}
                rate={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.image}
            />
            <StatusBar
                backgroundColor={metalBlue}
                barStyle="light-content"
            ></StatusBar>
            <LinearGradient
                colors={[logoGradientInit, logoGradientEnd]}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.circle}
            >
                <Logo
                    source={require('../../../assets/logo/logo-white.png')}
                />
            </LinearGradient>
            <Input
                placeholder="Nome"
                value={username}
                onChangeText={setUsername}
            />
            <Input
                placeholder="Email"
                value={email}
                autoCompleteType="email"
                keyboardType="email-address"
                onChangeText={setEmail}
            />
            <Input
                placeholder="Senha"
                value={password}
                autoCompleteType="password"
                textContentType="password"
                secureTextEntry={true}
                onChangeText={setPassword}
            />
            <ButtonLogin onPress={makeRegister}>
                <LinearGradient
                    colors={["#6f93db", "#56e3ee"]}
                    style={styles.loginButton}
                    start={[0, 1]}
                    end={[1, 0]}
                >
                    <Text style={styles.loginButtonText}>Registre-se</Text>
                </LinearGradient>
            </ButtonLogin>
        </Screen>
    );
};

const styles = StyleSheet.create({
    circle: {
        marginBottom: normalize(100),
        width: normalize(150),
        height: normalize(150),
        borderRadius: normalize(150 / 2),
    },
    loginButton: {
        padding: normalize(15),
        alignItems: "center",
        borderRadius: 5,
    },
    loginButtonText: {
        fontSize: normalize(18),
        color: white,
        fontFamily: "roboto-bold",
    },
    image: {
        width: 450,
        height: 1000,
        position: 'absolute',
        alignItems: "center",
        justifyContent: "center",
    },
});
