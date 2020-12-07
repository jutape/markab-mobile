import React, { useState } from "react";
import {StatusBar, View, Alert} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {normalize} from "../../../services/normalize";
import {
    SafeView,
    InputBox,
    TittleBox,
    TextInput,
    InputText,
    ConfirmBox,
    ConfirmButton,
} from "./styles";
import {metalBlue} from "../../../utils/color";
import api from "../../../services/api";

export default ({navigation}) => {
    const [code, setCode] = useState("");

    const searchEvent = async () => {
        if(code.length < 6){
            Alert.alert('Digite um código valido!')
        } else {
            try {
                const response = await api.get(`/api/event/${code}`);
    
                navigation.navigate("enterEvent2", {event: response.data, eventCode: code });
            } catch(_err) {
                console.log(_err);
                Alert.alert('Erro ao buscar o evento!');
            }
        }
    }

    return (
        <SafeView>
            <StatusBar
                backgroundColor={metalBlue}
                barStyle="light-content"
            ></StatusBar>
            <Ionicons
                onPress={() => navigation.navigate("Menu")}
                name={"ios-arrow-round-back"}
                style={{
                    position: 'absolute',
                    marginTop: 30,
                    marginLeft: 30
                }}
                size={normalize(60)}
                color="white"
            />
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: "center",
                    marginHorizontal: 0
                }}
            >
                <InputBox>
                    <TittleBox>Código do evento</TittleBox>
                    <TextInput placeholder="Digite aqui" placeholderTextColor="#57637a" value={code} onChangeText={setCode} autoCapitalize="characters"></TextInput>
                </InputBox>
                <ConfirmBox>
                    <ConfirmButton onPress={searchEvent}>
                        <InputText>
                            Confirmar
                        </InputText>
                    </ConfirmButton>
                </ConfirmBox>
            </View>
        </SafeView>
    );
};
