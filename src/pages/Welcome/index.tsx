import React from 'react';

//Components
import { Button } from '../../components/Button';
import { ButtonNext } from '../../components/ButtonNext';


import {
    Container,
    Title,
    Image
} from './styles';

export function Welcome(){
    return(
        <Container>
            <Title>I'm Tayse Rosa - Developer Web Mobile </Title>
            <Image source={require('../../images/dev.png')} />
            <Button text="github" link="https://github.com/tayserosa" />
            <Button text="linkedin" link="https://www.linkedin.com/in/tayse-rosa-3b683151/" />

            <ButtonNext title="Próximo" />
        </Container>
    )
}