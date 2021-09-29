import React from 'react';

//Libs
import { Feather } from '@expo/vector-icons';
import { Botao } from '../../components/Botao';

//Style
import {
    Container,
    Title,
    TextMain,
    ImageDevResume,
} from '../generalStyles';

export default function MyResume(){
    
    const urlToDownload = 'https://tayserosa.dev/img/curriculoTayseRosa.pdf';

    return(
        <Container>
            <Title>
                <Feather name="file-text" size={24} color="#9e587c" />    
                Meu currículo
            </Title>

            <TextMain>Faça o download do meu currículo aqui..</TextMain>

            
            <ImageDevResume source={{ uri: "https://tayserosa.dev/img/hero3.png" }} style={{ marginBottom:100 }} />
            
            
            <TextMain>
                <Botao text="Meu currículo" link={urlToDownload} />
            </TextMain>

        </Container>
    );
}