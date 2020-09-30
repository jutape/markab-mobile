import React from "react";
import { StatusBar, ScrollView } from "react-native";
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
import { white, skyLevel1, skyLevel2, skyLevel3, skyLevel4 } from '../../utils/color';

export default ({ navigation }) => {
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
                        uri:
                            "https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/e35/79965207_2348984642059325_5081379317183851339_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=105&_nc_ohc=fvtt4U0tIQwAX-ZquVV&oh=323d9d059c390d13f0060f53888c9a36&oe=5ED8B18D",
                    }}
                />
                <WelcomeText>Olá Débora!</WelcomeText>
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
                    <Option colour={skyLevel2} size="one">
                        <FontAwesome
                            name={"users"}
                            size={normalize(60)}
                            color="white"
                        />
                    </Option>
                    <Option colour={skyLevel3} size="two">
                        <OptionText>Entrar em evento</OptionText>
                    </Option>
                    <Option colour={skyLevel4} size="two">
                        <OptionText>Meus eventos</OptionText>
                    </Option>
                    <Option colour={skyLevel2} size="one">
                        <FontAwesome
                            name={"cog"}
                            size={normalize(80)}
                            color="white"
                        />
                    </Option>
                    <Option colour={skyLevel1} size="one">
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
