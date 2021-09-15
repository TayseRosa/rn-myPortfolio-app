import React from 'react';
import { Linking } from 'react-native';

import {
    Button,
    ButtonTitle
} from './styles';

interface Props{
    title: string;
}

export function ButtonNext({ title }:Props){
    return(
        <Button>
            <ButtonTitle> { title.toUpperCase() } </ButtonTitle>
        </Button>
    );
}