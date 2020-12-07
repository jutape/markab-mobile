import React from "react";

import {
    SafeView,
    BigText,
} from "./styles";
import {StatusBar } from "react-native";
import {metalBlue, white} from "../../../utils/color";
import {Ionicons} from "@expo/vector-icons";
import {normalize} from "../../../services/normalize";
import {OkButton} from "../step2/styles";


export default ({navigation}) => {

    return (
        <SafeView>
            <StatusBar
                backgroundColor={white}
                barStyle="dark-content"
            ></StatusBar>
            <BigText>
                Sua presença foi confirmada!
            </BigText>
            <OkButton onPress={() => {navigation.navigate("Menu")}}>
                <Ionicons
                    name={"ios-checkmark"}
                    size={normalize(70)}
                    color={metalBlue}
                />
            </OkButton>
        </SafeView>
    );
};
