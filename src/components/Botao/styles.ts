import React from "react";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: ${({theme})=>theme.colors.secondary};
    width: 50%;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    top:20px;
    padding:10px 30px;
    margin-bottom: 20px;
    `;

export const ButtonText = styled.Text`
    color: ${({theme})=>theme.colors.background_light};
    font-size: 16px;
    font-weight: bold;
    `;

export const ContainerButton = styled.Text`
    
`;