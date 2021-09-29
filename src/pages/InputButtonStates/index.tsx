import React, { useState } from "react";
import { Text, View, Button } from "react-native";

//Style
import {
    Container, 
    Title,
    TextMain,

    Input,
    Quadrado,
}from './styles';

const Hello = () => {
    const [ name, setName ]  = useState('Tayse')
    const [ mostrar, setMostrar ] = useState(false);

    function handleTrocarNome(){
        setName('Théo');
    }

    function handleMostrarNome(){
        setMostrar(!mostrar)
    }
    
    return(
        <View>
            <Input 
                value={name}
                onChangeText={ t=>setName(t) }
            />
            <Text> Olá { name } </Text>

            <Button 
                title="Trocar nome para Théo"
                onPress={ handleTrocarNome }
            />

            <Button 
                title={ mostrar ?  'Ocultar nome' : 'Mostrar nome' }
                onPress={ handleMostrarNome }
                
            />

            {mostrar &&
                <Quadrado>
                    <Text> { name } </Text>
                </Quadrado>
            }
        </View>
    );
}

export default function InputButtonStates(){


    return(
        <View>
            <Hello />
        </View>
    );    
}

