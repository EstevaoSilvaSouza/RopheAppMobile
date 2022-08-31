import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Api from '../contexts/Api.Instance'
import { AuthContext } from '../contexts/Auth.Context'

const MainPrincipal = ({ navigation }) => {

    const [dados, setDados] = React.useState(null);
    const { token, IsAuthenticated, Logout } = React.useContext(AuthContext);


    const userRequestApi = () => {
        Api.get('/user/', {
            headers: { "authorization": token }
        }).then((response) => {
            console.log(response)
            console.log("status é ", IsAuthenticated)
            setDados(response.data)
        }).catch((err) => { console.log(err); });
    }




    React.useEffect(() => {
        if (IsAuthenticated) {
            userRequestApi()

        }
        return undefined

    }, [])

    return (
        <React.Fragment>
            {dados ? <View style={styles.boxMain}>
                <Image style={styles.img} source={require('../../assets/eu.jpg')} />
                <Text style={styles.textName}>{dados.UserLogado?.nome} {dados.UserLogado?.sobrenome}</Text>
                <Text style={styles.textCargo}>{dados.UserLogado?.cargo} ☆☆☆</Text>
                <Text style={styles.email}>{dados.UserLogado?.email} ☆☆☆</Text>
            </View> :
                <View>
                    <Text>Falha ao processar!!</Text></View>}

            <View style={styles.viewBoxMenus}>
                <TouchableOpacity style={styles.boxBtn} onPress={() => navigation.navigate('Estoque')}>
                    <Text style={styles.btnText}>Estoque</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBtn}>
                    <Text style={styles.btnText}>Historico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBtn}>
                    <Text style={styles.btnText}>Baixa Pos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBtn} onPress={() => Logout()} >
                    <Text style={styles.btnTextSair}>Sair</Text>
                </TouchableOpacity>
            </View>

            {dados?.UserLogado?.cargo === "Administrador" && (
                <View>
                    <Text>Bem vindo admin</Text>
                </View>
            )}



        </React.Fragment>

    )
}

const styles = StyleSheet.create({
    viewBoxMenus: {
        width: '100%',
        height: 300,
        //backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    boxBtn: {
        width: '46%',
        height: '42%',
        marginTop: 20,
        marginLeft: 10,
        backgroundColor: 'rgb(25, 25, 25)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        borderBottomColor: 'rgb(186, 77, 227)',
        borderBottomWidth: 3,
        marginHorizontal: 2

    },
    btnText: {
        color: 'rgb(186, 77, 227)',
        fontWeight: 'bold'
    },
    btnTextSair: {
        color: '#FF0014',
        fontWeight: 'bold'
    },
    boxMain: {
        alignItems: 'center',
        width: '100%',
        height: 280,
        backgroundColor: 'rgb(25, 25, 25)',
        borderBottomColor: 'rgb(186, 77, 227)',
        borderBottomWidth: 3,
        //borderTopLeftRadius: 30,
        // borderTopRightRadius: 30
    },
    boxWeb: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0, 0, 0)'
    },
    img: {
        position: 'absolute',
        left: 20,
        marginTop: 60,
        width: 125,
        height: 125,
        borderWidth: 3,
        borderColor: 'rgb(186, 77, 227)',
        borderRadius: 15
    },
    textName: {
        color: 'rgb(186, 77, 227)',
        position: 'absolute',
        marginTop: 80,
        right: 30,
        fontSize: 16,
        fontWeight: 'bold'
    },
    textCargo: {
        color: 'rgb(138, 5, 190)',
        position: 'absolute',
        marginTop: 105,
        right: 40,
        fontSize: 20,
        fontWeight: 'bold'
    },
    email: {
        color: 'rgb(138, 5, 190)',
        position: 'absolute',
        marginTop: 140,
        right: 20,
        fontSize: 17,
        fontWeight: 'bold'
    }
})


export default MainPrincipal