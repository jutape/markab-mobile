import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { normalize } from "../../../services/normalize";
import * as Location from "expo-location";
import { Screen, MapContainer } from './styles';

export default ({ navigation }) => {
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
    }, []);
    return (
        <Screen>
            <StatusBar
                backgroundColor={"#40495a"}
                barStyle="light-content"
            ></StatusBar>
            <MapContainer>
                {location ? (
                    <MapView
                        style={styles.mapStyle}
                        initialRegion={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.006,
                            longitudeDelta: 0.006,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                            }}
                            title={"Casa"}
                            description={"minha casa"}
                        />
                    </MapView>
                ) : (
                    <Text>Carregando...</Text>
                )}
                <Text style={styles.textConfirm}>Confirmar localização?</Text>
                <View style={styles.areaOptions}>
                    <Text
                        style={styles.confirmButton}
                        onPress={() => navigation.navigate("step2")}
                    >
                        Sim
                    </Text>
                    <Text
                        style={styles.denyButton}
                        onPress={() => navigation.navigate("Menu")}
                    >
                        Não
                    </Text>
                </View>
            </MapContainer>
        </Screen>
    );
};

const styles = StyleSheet.create({
    mapStyle: {
        marginTop: normalize(20),
        borderRadius: 10,
        width: normalize(340),
        height: normalize(600),
    },
    textConfirm: {
        color: "#40495a",
        marginTop: normalize(18),
        fontSize: normalize(26),
        fontFamily: "roboto-black",
    },
    areaOptions: {
        width: normalize(300),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    confirmButton: {
        color: "green",
        marginTop: normalize(18),
        fontSize: normalize(26),
        fontFamily: "roboto-black",
    },
    denyButton: {
        color: "red",
        marginTop: normalize(18),
        fontSize: normalize(26),
        fontFamily: "roboto-black",
    },
});
