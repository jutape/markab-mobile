import React, { useEffect, useState } from "react";

import {
    SafeView,
    CardEvent,
    TextTitle,
    TextValue,
    OkButton,
    NoButton,
    TextInput,
    InputBox,
    TittleBox,
} from "./styles";
import * as Location from "expo-location";
import api from "../../../services/api";
import { StatusBar, View, ScrollView, Alert } from "react-native";
import { metalBlue } from "../../../utils/color";
import { normalize } from "../../../services/normalize";
import { Ionicons } from "@expo/vector-icons";

export default ({ route, navigation }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
        const carregarEvento = async () => {
            const { event, eventCode } = route.params;
            setName(event.name);
            setDescription(event.description);
            setDate(new Date(event.dateTime));
        };
        carregarEvento();
    }, []);
    const confirmarPresença = async () => {
        if(route.params.event.havePass && !password ) {
            Alert.alert('A senha não foi preeenchida!')
        } else if (!location){
            Alert.alert('Não foi possivel pegar a sua localização para confirmar presença!')
        } else {
            try {
                const response = await api.put(`/api/event/${route.params.eventCode}`, {
                    password,
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                });
                navigation.navigate("enterEvent3");
            } catch (_err) {
                console.log(_err)
                Alert.alert(
                    "Houve um erro ao cadastrar o evento, tente novamente mais tarde!"
                );
            }
        }
    }
    const dateFormate = (data) => {
        var dia = data.getDate().toString(),
            diaF = dia.length == 1 ? "0" + dia : dia,
            mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = mes.length == 1 ? "0" + mes : mes,
            anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    };

    const hourFormate = (data) => {
        var hora = data.getHours();
        var hora = hora.toString().length == 1 ? "0" + hora : hora;
        var minuto = data.getMinutes();
        var minuto = minuto.toString().length == 1 ? "0" + minuto : minuto;
        return hora + ":" + minuto;
    };
    return (
        <SafeView>
            <StatusBar
                backgroundColor={metalBlue}
                barStyle="light-content"
            ></StatusBar>
            <View
                style={{
                    flex: 1,
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 0,
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "center",
                    }}
                >
                    <CardEvent>
                        <TextTitle>Nome do evento</TextTitle>
                        <TextValue>{name}</TextValue>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginHorizontal: 20,
                            }}
                        >
                            <View>
                                <TextTitle>Data</TextTitle>
                                <TextValue>{dateFormate(date)}</TextValue>
                            </View>
                            <View>
                                <TextTitle>Hora</TextTitle>
                                <TextValue>{hourFormate(date)}</TextValue>
                            </View>
                        </View>
                        <TextTitle>Descrição</TextTitle>
                        <TextValue>{description}</TextValue>
                    </CardEvent>
                    {route.params.event.havePass ? (
                        <InputBox>
                            <TittleBox>Senha do evento</TittleBox>
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                autoCompleteType="password"
                                textContentType="password"
                                autoCapitalize="none"
                            ></TextInput>
                        </InputBox>
                    ) : (
                        <></>
                    )}
                    <View
                        style={{
                            flexDirection: "row",
                            marginHorizontal: 50,
                            justifyContent: "space-between",
                        }}
                    >
                        <OkButton
                            onPress={confirmarPresença}
                        >
                            <Ionicons
                                name={"ios-checkmark"}
                                size={normalize(70)}
                                color={metalBlue}
                            />
                        </OkButton>
                        <NoButton
                            onPress={() => {
                                navigation.navigate("Menu");
                            }}
                        >
                            <Ionicons
                                name={"ios-close"}
                                size={normalize(70)}
                                color={metalBlue}
                            />
                        </NoButton>
                    </View>
                </ScrollView>
            </View>
            <Ionicons
                onPress={() => navigation.navigate("enterEvent1")}
                name={"ios-arrow-round-back"}
                style={{
                    position: "absolute",
                    marginLeft: 30,
                }}
                size={normalize(60)}
                color="white"
            />
        </SafeView>
    );
};
