import React from 'react';
import { Linking } from 'react-native';

import {
    Container,
    ButtonText, 
    ContainerButton
} from './styles';

interface Props{
    text: string;
    link: string;
    icon: string;
}

export function Botao({ text, link, icon }:Props){
    return(
        <Container>
            <ContainerButton> { icon }  
                 <ButtonText onPress={()=>Linking.openURL(link)}> { text.toUpperCase() } </ButtonText>
            </ContainerButton>
        </Container>
    );
}