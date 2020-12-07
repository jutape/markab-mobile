import React, { useEffect, useState } from "react";
import { StatusBar, ScrollView, Alert } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { normalize } from "../../services/normalize";

import {
    SafeView,
    ProfileImage,
    WelcomeText,
    MenuOptionsView,
    Option,
    OptionText,
} from "./styles";
import {
    white,
    skyLevel1,
    skyLevel2,
    skyLevel3,
    skyLevel4,
} from "../../utils/color";
import api from "../../services/api";
import { logout } from "../../services/auth";
import { CommonActions } from "@react-navigation/native";

export default ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [image, setImage] = useState(
        "https://alumni.crg.eu/sites/default/files/default_images/default-picture_0_0.png"
    );
    useEffect(() => {
        const setUserName = async () => {
            try {
                const response = await api.get("/api/user");

                setUsername(response.data.name);
                setImage(response.data.image);
            } catch (_err) {
                Alert.alert(
                    "Houve um problema com o login, verifique suas credenciais!"
                );
                await logout();
                const resetAction = CommonActions.reset({
                    index: 1,
                    routes: [{ name: "Home" }],
                });
            }
        };
        setUserName();
    }, []);

    const signOut = async () => {
        await logout();

        const resetAction = CommonActions.reset({
            index: 1,
            routes: [{ name: "Home" }],
        });
        navigation.dispatch(resetAction);
    };

    return (
        <SafeView>
            <ScrollView
                style={{
                    marginHorizontal: 0,
                }}
            >
                <StatusBar
                    backgroundColor={white}
                    barStyle="dark-content"
                ></StatusBar>
                <ProfileImage
                    source={{
                        uri: image,
                    }}
                />
                <WelcomeText>Olá {username}!</WelcomeText>
                <MenuOptionsView>
                    <Option
                        colour={skyLevel1}
                        size="one"
                        onPress={() => navigation.navigate("step1")}
                    >
                        <Ionicons
                            name={"ios-add"}
                            size={normalize(110)}
                            color="white"
                        />
                    </Option>
                    <Option
                        colour={skyLevel2}
                        size="one"
                        onPress={() => navigation.navigate("enterEvent1")}
                    >
                        <Ionicons
                            name={"ios-play"}
                            size={normalize(110)}
                            color="white"
                        />
                    </Option>
                    <Option
                        colour={skyLevel3}
                        size="two"
                        onPress={() => navigation.navigate("myEvents1")}
                    >
                        <OptionText>Meus eventos</OptionText>
                    </Option>
                    <Option colour={skyLevel2}  onPress={signOut} size="one">
                        <FontAwesome
                            name={"sign-out"}
                            size={normalize(80)}
                            color="white"
                        />
                    </Option>
                    <Option colour={skyLevel1} onPress={() => Alert.alert('Por enquanto o projeto esta em fase de desenvolvimento, ainda não temos link ;-;')} size="one">
                        <FontAwesome
                            name={"share-alt"}
                            size={normalize(80)}
                            color="white"
                        />
                    </Option>
                </MenuOptionsView>
            </ScrollView>
        </SafeView>
    );
};
