import React, { useState, useEffect } from "react";

import { Video } from "expo-av";
import {
    StyleSheet,
    StatusBar,
    Text,
    Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { normalize } from "../../services/normalize";
import {
    Screen,
    ButtonLogin,
    Input,
    ViewOptions,
    Option,
    Logo,
} from "./styles";
import {
    white,
    metalBlue,
    logoGradientInit,
    logoGradientEnd,
} from "../../utils/color";
import { CommonActions } from "@react-navigation/native";
import { login } from "../../services/auth";
import api from "../../services/api";

export default ({ navigation }) => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const makeLogin = async () => {
        if (email.length === 0 || password.length === 0) {
            Alert.alert("Preencha os campos para fazer login!");
        } else {
            try {
                const response = await api.post("/api/user/auth", {
                    email,
                    password,
                });

                await login(response.data.token);

                const resetAction = CommonActions.reset({
                    index: 1,
                    routes: [{ name: "Menu" }],
                });
                navigation.dispatch(resetAction);
            } catch (_err) {
                console.log(_err);
                Alert.alert(
                    "Houve um problema com o login, verifique suas credenciais!"
                );
            }
        }
    };

    const image = {
        uri:
            "https://images.wallpaperscraft.com/image/milky_way_starry_sky_stars_128523_3840x2160.jpg",
    };

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
                        source={require("../../../assets/logo/logo-white.png")}
                    />
                </LinearGradient>
                <Input
                    placeholder="Email"
                    value={email}
                    autoCompleteType="email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="Senha"
                    value={password}
                    autoCompleteType="password"
                    textContentType="password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <ButtonLogin onPress={makeLogin}>
                    <LinearGradient
                        colors={["#6f93db", "#56e3ee"]}
                        style={styles.loginButton}
                        start={[0, 1]}
                        end={[1, 0]}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </LinearGradient>
                </ButtonLogin>
                <ViewOptions>
                    <Option onPress={() => navigation.navigate("Register")}>
                        Registrar
                    </Option>
                    <Option>Esqueceu a senha?</Option>
                </ViewOptions>
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
