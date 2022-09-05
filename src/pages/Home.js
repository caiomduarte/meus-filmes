import React from "react";

import {
        View, 
        Text, 
        TextInput, 
        TouchableOpacity, 
        StyleSheet
    }  from 'react-native';

export default function Home(){
    return(
        <View>
            <Text>Meus Filmes</Text>
            <Text>Olá Caio, boa noite!</Text>

            <TouchableOpacity>
                <Text>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}

//Criando os estilos
const styles = StyleSheet.create({
 
});