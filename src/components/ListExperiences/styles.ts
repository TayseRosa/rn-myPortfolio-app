import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    margin-top:25px;    
`;

export const Experience = styled.Text`
    background-color: ${({theme})=>theme.colors.background_light};
    color:${({theme}) => theme.colors.font};
    font-size:16px;
    padding:10px;
    border-radius: 15px;
`;

export const ExperienceDate = styled.Text`
    color:${({theme}) => theme.colors.secondary};
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
`;

export const ExperienceOffice = styled.Text`
    font-size: 16px;
    font-style: italic;

`;