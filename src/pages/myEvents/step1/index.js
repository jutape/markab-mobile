import React, { useEffect, useState } from "react";

import {
    SafeView,
    MainScreen,
    Title,
    ListEvents,
    EventBox,
    TitleEvent,
    NumParticipants,
} from "./styles";
import { StatusBar, Alert } from "react-native";
import { metalBlue, white } from "../../../utils/color";
import { normalize } from "../../../services/normalize";
import { Ionicons } from "@expo/vector-icons";
import api from "../../../services/api";

export default ({ navigation }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const carregarEventos = async () =>{
            try {
                const response = await api.get("/api/event/");
    
                setEvents(response.data);
            } catch(_err) {
                console.log(_err);
                Alert.alert('Erro ao pegar os eventos!');
            }
        };
        carregarEventos();
    }, []);
    return (
        <SafeView>
            <Ionicons
                onPress={() => navigation.navigate("Menu")}
                name={"ios-arrow-round-back"}
                style={{
                    position: "absolute",
                    marginTop: 30,
                    marginLeft: 30,
                }}
                size={normalize(60)}
                color={metalBlue}
            />
            <StatusBar
                backgroundColor={white}
                barStyle="dark-content"
            ></StatusBar>
            <MainScreen>
                <Title>Meus eventos</Title>
                <ListEvents>
                    {events.map((event, index) => (
                        <EventBox
                            onPress={() => navigation.navigate("myEvents2", {eventCode: event.eventCode})}
                            key={index}
                        >
                            <TitleEvent>{event.name}</TitleEvent>
                            <NumParticipants>
                                {event.members} participantes
                            </NumParticipants>
                        </EventBox>
                    ))}
                </ListEvents>
            </MainScreen>
        </SafeView>
    );
};
