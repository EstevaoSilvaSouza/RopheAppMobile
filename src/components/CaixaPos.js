import React from 'react';
import { View, StyleSheet, Text } from 'react-native'


const CaixaPos = ({ nome, serie, status, versao }) => {
    return (
        <View style={styles.box}>
            <View style={styles.boxCaixa}>
                <Text>Nome: {nome}</Text>
                <Text>Serie: {serie}</Text>
                <Text>Status: {status}</Text>
                <Text>Versao: {versao}</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: "auto",
        paddingBottom: 10
    },

    boxCaixa: {
        width: '95%',
        height: 150,
        backgroundColor: "#FF1147",
        borderRadius: 20,
    }
})

export default CaixaPos