import React from 'react';

import {
    Container,
    Experience,
    ExperienceDate,
} from './styles';

export default function ListExperiences({ data }){
    return(
        <Container>
            <ExperienceDate> { data.date } - { data.office } </ExperienceDate>
            <Experience> 
                { data.company }
                { data.experience } 
            </Experience>
        </Container>
    )
}
