import React from 'react';
import { Entypo } from '@expo/vector-icons';

import {
    Container,
    Skill,
} from './style';

export default function ListSkill({ data }){
    return(
        <Container>
            <Skill> 
                <Entypo name="code" size={16} color="#DA76AD" />  { data.skill } 
            </Skill>
        </Container>
    )
}
