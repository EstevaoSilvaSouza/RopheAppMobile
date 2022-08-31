import { View, Text, TextInput, StyleSheet } from 'react-native'


const InputCustom = ({ nome, placeHolder, valor, onChange, typeKeyboard, pass, ...props }) => {

    return (
        <View>
            <Text style={Style.nome}>{nome.toUpperCase()}:</Text>
            <TextInput
                name={nome}
                placeholder={placeHolder}
                value={valor ? valor : null}
                onChangeText={value => onChange(nome, value)}
                keyboardType={typeKeyboard}
                secureTextEntry={pass}
                style={Style.inputStyle}
                maxLength={20}
                placeholderTextColor={"#000"}
                {...props}
            />
        </View>
    )
}

const Style = StyleSheet.create({
    inputStyle: {
        width: '100%',
        height: 60,
        fontWeight: 'bold',
        fontSize: 15,
        borderRadius: 18,
        borderWidth: 4,
        marginBottom: 16,
        padding: 20,
        paddingHorizontal: 80,
        textAlign: 'center',
        color: '#000'
    },
    nome: {
        fontWeight: 'bold',
        color: "#FF0014",
        fontSize: 20
    }

})

export default InputCustom