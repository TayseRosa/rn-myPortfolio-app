import React, { useState } from "react";

//Libs
import { Feather, Entypo } from "@expo/vector-icons";

//Components
import ListItem from "../../components/ListSkills";
import { Botao } from "../../components/Botao";

//Style
import {
    Container,
    Title,
    TextMain,
    WrapperDev,
    ImageDev,
    Listing,
} from '../generalStyles';

export default function About(){
    const github = 'https://github.com/tayserosa';
    const linkedin = "https://www.linkedin.com/in/tayse-rosa-3b683151/";

    const iconGithub = <Feather name="github" size={16} color="#680e0e" />
    const iconlinkedin = <Feather name="linkedin" size={16} color="#444" />

    const [ data, setData ] = useState([
        {id:1, skill: 'HTML5'},
        {id:2, skill: 'BOOTSTRAP'},
        {id:3, skill: 'CSS3'},
        {id:4, skill: 'JAVASCRIPT'},
        {id:5, skill: 'PHP'},
        {id:6, skill: 'WORDPRESS'},
        {id:7, skill: 'REACT NATIVE'}
    ]);


    return(
        <Container>
            
            <Title>
                <Entypo name="home" size={24} color="#DA76AD" />    
                Tayse Rosa - Web/mobile developer
            </Title>
            <TextMain>
            Olá, meu nome é Tayse Rosa, moro em Porto Alegre RS sou desenvolvedora web, mobile, trabalho com desenvolvimento web há 5 anos, utilizando as seguintes tecnologias:
            </TextMain>

            <WrapperDev>
                <ImageDev source={{ uri: "https://tayserosa.dev/img/hero3.png" }}/>

                <Listing 
                    data={data}
                    keyExtractor={ item =>String(item.id)}
                    renderItem={ ({ item })=> <ListItem data={item}  /> } 
                />
            </WrapperDev>

            <TextMain>
                <Botao icon={iconGithub} text="github" link={github} />  <Botao icon={iconlinkedin} text="linkedin" link={linkedin} />      
            </TextMain>
        </Container>
    );    
}

