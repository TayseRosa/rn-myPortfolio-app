import React, { useState } from "react";

//Components
import ListItem from "../../components/ListExperiences";

//Libs
import { Entypo } from "@expo/vector-icons";
import { Modal } from "react-native";

//Style
import {
    Container,
    Title,
    Listing,
    ModalBox,
    ModalTitle,
    ModalText,
    ModalButtonClose
} from '../generalStyles';

export default function WorkingExperiences(){

    const [ data, setData ] = useState([
        {id:1, date: '2010 - 2013', office: 'IT Assistant',company:'SUMMIT - Cachoeirinha RS ', experience: 'Assistente de TI, prestando suporte técnico em hardware, software, impressoras, ERP, Active Directori, Backup Data Protector entre outras funções. Trabalhar na SUMMIT também me trouxe e tem trazido outros conhecimentos, como: ISO 9001, conhecimento ITIL, conhecimento mais aprofundado de ERP, participação CIPA', },
        {id:2, date: '2013 - 2014', office: 'Website development', company:'LongView Tecnologia, Porto Alegre, RS', experience: 'Desenvolvimento de sites e sistemas web em PHP e Wordpress'},
        {id:3, date: '2014 - 2015', office: 'Developer', company:'LongView Tecnologia, Porto Alegre, RS', experience: 'Desenvolvimento de sites e sistemas web em PHP e Wordpress'},
        {id:4, date: '2015 - 2020', office: 'Freelancer WordPress Developer', company:'TR WEB SITES, Porto Alegre, RS', experience: 'Trabalhei como freelancer com desenvolvimento de web sites com Wordpress / PHP, através de plataformas freelancer como GetNinjas'},
    ]);

    return(
        <Container>
            <Title>
                <Entypo name="user" size={24} color="#DA76AD" />    
                Experiências profissionais:
            </Title>

            <Listing 
                data={data}
                keyExtractor={ item =>String(item.id)}
                renderItem={ ({ item })=> <ListItem data={item} /> } 

                style={{ marginTop:35 }}
                contentContainerStyle={{marginHorizontal:20}}
            />

        </Container>
    );    
}