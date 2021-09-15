import React from "react";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({theme})=> theme.colors.text};
    
    padding: 15px 0;
    top:30px;
    
    justify-content: center;
    align-items: center;
    `;

export const ButtonTitle = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=> theme.colors.primary};
    font-size: 18px;

`;

