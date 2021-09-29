import React from "react";

//Libs
import { Feather, Entypo } from "@expo/vector-icons";

//Components
import { Botao } from "../../components/Botao";

//Style
import {
    Container,
    Title,
    TextMain,
} from '../generalStyles';

export default function SocialNetwork(){
    const github = 'https://github.com/tayserosa';
    const linkedin = "https://www.linkedin.com/in/tayse-rosa-3b683151/";
    const whatsapp = "https://api.whatsapp.com/send?phone=051982368077";     
    const stackOverflow = "#";     
    const comunidadeRocketseat = "https://app.rocketseat.com.br/me/tayse-rosa-1568335594";     
    const facebook = "https://www.facebook.com/wpdeveloper.net.br";     

    const iconGithub = <Feather name="github" size={24} color="#444" />
    const iconlinkedin = <Feather name="linkedin" size={24} color="#444" />
    const iconWhatsapp = <Feather name="share-2" size={24} color="#444" />
    const iconStackoverflow = <Feather name="slack" size={24} color="#444" />
    const iconRocketseat = <Feather name="pocket" size={24} color="#444" />
    const iconFacebook = <Feather name="facebook" size={24} color="#444" />

    return(
        <Container>
            
            <Title>
                <Entypo name="home" size={24} color="#DA76AD" />    
                Contato
            </Title>
            <TextMain> Entre em contato comigo através de minhas redes sociais: </TextMain>

                <Botao icon={iconGithub} text="github" link={github} />
                <Botao icon={iconlinkedin} text="linkedin" link={linkedin} />      
                <Botao icon={iconWhatsapp} text="whatsapp" link={whatsapp} />      
                <Botao icon={iconStackoverflow} text="StackOverflow" link={stackOverflow} />      
                <Botao icon={iconRocketseat} text="Comunidade Rocketseat" link={comunidadeRocketseat} />      
                <Botao icon={iconFacebook} text="Facebook" link={facebook} />      
        </Container>
    );    
}

