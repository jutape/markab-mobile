import { AsyncStorage } from 'react-native';
export const TOKEN_KEY = "@tokenKey";

export const isAuthenticated = async () => await AsyncStorage.getItem(TOKEN_KEY) !== null;
export const getToken = async () => await AsyncStorage.getItem(TOKEN_KEY);

export const login = async token => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
};
export const logout = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
};