import React, { useState, useEffect } from "react";

import { SafeView, CardEvent, TextTitle, TextValue, NoButton } from "./styles";
import { CommonActions } from "@react-navigation/native";
import { StatusBar, View, ScrollView, Alert } from "react-native";
import { metalBlue } from "../../../utils/color";
import { normalize } from "../../../services/normalize";
import { Ionicons } from "@expo/vector-icons";
import api from "../../../services/api";

export default ({ route, navigation }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [users, setUsers] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const carregarEvento = async () => {
            try {
                const response = await api.get(
                    `/api/event/${route.params.eventCode}`
                );
                setName(response.data.name);
                setDescription(response.data.description);
                setDate(new Date(response.data.dateTime));
                setUsers(response.data.members);
            } catch (_err) {
                console.log(_err);
                Alert.alert("Erro ao buscar o evento!");
            }
        };
        carregarEvento();
    }, []);

    const deleteEvent = async () => {
        try {
            const response = await api.delete(`/api/event/${route.params.eventCode}`);
            Alert.alert('Evento deletado com sucesso!')
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{ name: "myEvents1" }],
            });
            navigation.dispatch(resetAction);
        } catch (_err) {
            console.log(_err);
            Alert.alert("Erro ao deletar o evento.");
        }
    };

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
                        alignItems: "center",
                    }}
                >
                    <CardEvent>
                        <TextTitle>Código do evento</TextTitle>
                        <TextValue>{route.params.eventCode}</TextValue>
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
                        <TextTitle>Participantes</TextTitle>
                        {users.map((user, index) => (
                            <TextValue key={index}>{user.name}</TextValue>
                        ))}
                    </CardEvent>
                    <NoButton onPress={deleteEvent}>
                        <Ionicons
                            name={"md-trash"}
                            size={normalize(50)}
                            color={metalBlue}
                        />
                    </NoButton>
                </ScrollView>
            </View>
            <Ionicons
                onPress={() => navigation.navigate("myEvents1")}
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
