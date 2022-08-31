import React, { createContext } from "react";
import Api from './Api.Instance'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'


export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [token, setToken] = React.useState();
    const [Error, SetError] = React.useState();
    const [IsAuthenticated, SetIsAuthenticated] = React.useState(false);
    const [userData, setUserData] = React.useState();
    const navigation = useNavigation();

    const Logout = () => {
        setToken(null);
        SetIsAuthenticated(false);
        navigation.navigate("Login");
    }

    const SingIn = async (payload) => {
        Api.post("/user/login", payload, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                SetError(null)
                setToken(response.data?.token)
                SetIsAuthenticated(true);
                navigation.navigate('Inicio')
            })
            .catch((error) => {
                setToken(null);
                SetError(error?.response?.data?.Message)
                SetIsAuthenticated(false);
                console.error(error?.response?.data)
                AsyncStorage.removeItem('token')
            })
    }

    return (
        <AuthContext.Provider value={{ SingIn, token, Error, IsAuthenticated, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;