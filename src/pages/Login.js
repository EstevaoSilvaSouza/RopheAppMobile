import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

//Importe dos components
import InputCustom from '../components/Input';

//Importar o Contexto para utilizarmos
import { AuthContext } from '../contexts/Auth.Context'

import Api from '../contexts/Api.Instance'

const Login = () => {

    const [login, setLogin] = React.useState();

    const { SingIn, token, Error } = React.useContext(AuthContext);

    const onChange = (nome, value) => {
        setLogin({ ...login, [nome]: value })
        //console.log(login)
    }

    const SubmitLogin = async () => {
        await SingIn(login);
    }

    return (
        <View style={Style.formMain}>

            <View>
                <Text style={Style.text}>Rophe ;)</Text>
            </View>
            <View>
                <InputCustom
                    nome={'usuario'}
                    onChange={onChange}
                    placeHolder={'Digite seu usuario'}
                    typeKeyboard={"default"}
                    focusable={true}
                />
                <InputCustom
                    nome={'senha'}
                    onChange={onChange}
                    placeHolder={'Digite seu usuario'}
                    typeKeyboard={"password"}
                    pass={true}
                />
                <TouchableOpacity style={Style.BtnEntrar} onPress={SubmitLogin}>
                    <Text style={Style.textBtn}>Entrar</Text>
                </TouchableOpacity>

                {Error && (
                    <Text style={Style.textFail}>{Error}</Text>
                )}
            </View>

        </View>
    )
}


const Style = StyleSheet.create({
    formMain: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 46,
        fontWeight: 'bold',
        marginBottom: 30
    },
    textFail: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FF0014',
        textAlign: 'center',
        marginTop: 30
    },
    BtnEntrar: {
        backgroundColor: '#FF0014',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10
    },
    textBtn: {
        color: "#FFFfff",
        fontWeight: 'bold',
    }
})

export default Login