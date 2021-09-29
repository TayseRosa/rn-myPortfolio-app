import React, { useState } from "react";

//Components
import ListItem from "../../components/ListCourses";

//Libs
import { Entypo } from "@expo/vector-icons";

//Style
import {
    Container,
    Title,
    Listing
} from '../generalStyles';

export default function Courses(){

    const [ data, setData ] =  useState ([
        {id:1, date: '2008 - 2010', office: 'Técnico em Informática', company:'QI - Escolas e Faculdades ', experience: 'Computer Technician, Computer Technology/Software · (2008 - 2010)'},
        {id:2, date: '2013 - 2014', office: 'Analise e Desenvolvimento de Sistemas', company:'Fadergs - Faculdade de Desenvolvimento do RS', experience: 'Analise e Desenvolvimento de Sistemas, Desenvolvimento de software · (2013 - 2014) - Trancado.'},
        {id:3, date: '2020', office: 'HTML5, CSS3', company:'B7Web', experience: ''},
        {id:4, date: '2020', office: 'Javascript', company:'B7Web', experience: ''},
        {id:5, date: '2020', office: 'Fundamentos de GIT', company:'B7Web', experience: ''},
        {id:6, date: '2020', office: 'PHP BÁSICO', company:'B7Web', experience: ''},
        {id:7, date: '2020', office: 'BOOTSTRAP', company:'B7Web', experience: ''},
        {id:8, date: '2020', office: 'PHP', company:'B7Web', experience: ''},
        {id:9, date: '2020', office: 'REACT NATIVE BÁSICO- MOBILE', company:'B7Web', experience: ''},
        {id:10, date: '2020', office: 'REACT NATIVE BÁSICO- INTERMEDIÁRIO', company:'B7Web', experience: ''},
        {id:11, date: '2021', office: 'REACT NATIVE BÁSICO- AVANÇADO', company:'B7Web', experience: ''},
        {id:12, date: '2021', office: 'IGNITE - ROCKETSEAT', company:'ROCKETSEAT', experience: ''},
        {id:13, date: '2021', office: 'ENGLISH COURSE', company:'WINNER VIP(em andamento)', experience: ''},
        
    ]);
    
    return(
        <Container>

            <Title>
                <Entypo name="edit" size={24} color="#DA76AD" />    
                Cursos realizados
            </Title>

            <Listing 
                
                data={data}
                
                keyExtractor={ item => String( item.id)}
                renderItem={ ({  item })=> <ListItem data={item} /> } 

                style={{ marginTop:35 }}
                contentContainerStyle={{marginHorizontal:20}}
            />
        </Container>
    );    
}
