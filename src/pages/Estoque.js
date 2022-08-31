import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Api from '../contexts/Api.Instance'
import { AuthContext } from '../contexts/Auth.Context'
//Components
import CaixaPos from '../components/CaixaPos'


const Estoque = () => {
    const [Pos, setPos] = React.useState();
    const [Atualizar, setAtualizar] = React.useState(false);
    const { token } = React.useContext(AuthContext)

    const posUserLoggedRequest = () => {
        Api.get('/pos/', {
            headers: { "authorization": token }
        }).then((data) => {
            setPos(data)
            setAtualizar(false)

        })
            .catch((err) => {
                console.log(err)
                setAtualizar(false)
            })
        setAtualizar(false)
    }
    const onAtualizarItens = () => {
        setAtualizar(true)
        posUserLoggedRequest()

    }

    React.useEffect(() => {
        posUserLoggedRequest();
    }, [])

    return (
        <React.Fragment >
            <Text style={styles.txtEstoque}>Estoque Qtd: {Pos?.data?.data?.length}</Text>
            <View style={styles.boxCentralEstoque}>
                <FlatList
                    data={Pos?.data?.data}
                    renderItem={({ item }) => {
                        return <CaixaPos nome={item.nome} serie={item.serie} status={item.status} versao={item.versao} key={item.id} />
                    }}
                    onRefresh={onAtualizarItens}
                    refreshing={Atualizar}
                />
            </View>

        </React.Fragment>

    )
}

const styles = StyleSheet.create({
    boxCentralEstoque: {
        width: '100%',
        height: 'auto',
        marginHorizontal: 12
    },
    txtEstoque: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30
    }
})

export default Estoque