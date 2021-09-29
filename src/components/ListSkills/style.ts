import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    height: 50px;
    `;

export const Skill = styled.Text`
    background-color: #4A4A4A;
    color: ${({theme})=>theme.colors.secondary};

    padding: 10px;
    margin: 3px 0;
    border-radius: 50px;
`;