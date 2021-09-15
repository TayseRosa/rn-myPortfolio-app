import React from 'react';
import { Linking } from 'react-native';

import {
    Container,
    ButtonText
} from './styles';

interface Props{
    text: string;
    link: string;
}

export function Button({ text, link }:Props){
    return(
        <Container>
            <ButtonText onPress={()=>Linking.openURL(link)}> { text.toUpperCase() } </ButtonText>
        </Container>
    );
}