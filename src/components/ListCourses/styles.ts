import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    margin-top:25px;    
`;

export const CourseDate = styled.Text`
    color:${({theme}) => theme.colors.secondary};
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
`;

export const Course = styled.Text`
    background-color: ${({theme})=>theme.colors.background_light};
    justify-content: center;
    
    color:${({theme})=>theme.colors.font};
    font-size:18px;
    padding:10px;
    border-radius: 15px;
`;

export const CourseText = styled.Text`
    color: #dedede;
    font-weight: 100;
`;