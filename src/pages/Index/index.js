import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar, View, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { normalize } from "../../services/normalize";
import { Screen, ButtonLogin, Input, ViewOptions, Option } from "./styles";

export default ({ navigation }) => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    return (
        <Screen>
            <StatusBar
                backgroundColor={"#40495a"}
                barStyle="light-content"
            ></StatusBar>
            <LinearGradient
                colors={["#6fdb9e", "#56c6ee"]}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.circle}
            />
            <Input
                placeholder="Usuário"
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
            <ButtonLogin onPress={() => navigation.navigate("Menu")}>
                <LinearGradient
                    colors={["#6fdb9e", "#56c6ee"]}
                    style={styles.loginButton}
                    start={[0, 1]}
                    end={[0.6, 0]}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </LinearGradient>
            </ButtonLogin>
            <ViewOptions>
                <Option>Registrar</Option>
                <Option>Esqueceu a senha?</Option>
            </ViewOptions>
        </Screen>
    );
};

const styles = StyleSheet.create({
    view: {
        
    },
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
        color: "#fff",
        fontFamily: "roboto-bold",
    }
});
