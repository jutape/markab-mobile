import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar, View, Text, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { normalize } from "../../services/normalize";
import { Screen, ButtonLogin, Input, ViewOptions, Option, Logo } from "./styles";
import { white, metalBlue, logoGradientInit, logoGradientEnd } from '../../utils/color';

export default ({ navigation }) => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    return (
        <Screen>
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
                autoCompleteType="email"
                keyboardType="email-address"
                onChangeText={setUsername}
            />
            <Input
                placeholder="Email"
                value={username}
                autoCompleteType="email"
                keyboardType="email-address"
                onChangeText={setUsername}
            />
            <Input
                placeholder="Senha"
                value={password}
                autoCompleteType="password"
                textContentType="password"
                secureTextEntry={true}
                onChangeText={setPassword}
            />
            <Input
                placeholder="Confirme a senha"
                value={confirmPassword}
                autoCompleteType="password"
                textContentType="password"
                secureTextEntry={true}
                onChangeText={setConfirmPassword}
            />
            <ButtonLogin onPress={() => navigation.navigate("Menu")}>
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
    }
});
