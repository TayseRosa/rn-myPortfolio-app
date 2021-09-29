import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
    const [ nome, setNome ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    
    const handleSave = async () => {
        if( nome && endereco != ''){
            await AsyncStorage.setItem('@nome', nome);
            await AsyncStorage.setItem('@endereco', endereco);
        }
    }

    const getNome = async () => {
        const n = await AsyncStorage.getItem('@nome');
        const g = await AsyncStorage.getItem('@endereco');
        setNome(n);
        setEndereco(g);
    }

    useEffect(()=>{  
        getNome();
    }, [])

    return(
        <View>
            <Text> Async Storage </Text>

            <TextInput 
                placeholder="DIgite seu nome"
                value={ nome }
                onChangeText={ e=>setNome(e) }
            />

            <TextInput 
                placeholder="Digite seu endereço"
                value={endereco}
                onChangeText={ f=>setEndereco(f) }
            />

            <Button 
                title="Salvar no Async Storage"
                onPress={ handleSave }
            />

            <Text> { nome } </Text>
            <Text> { endereco } </Text>
        </View>
    );
}