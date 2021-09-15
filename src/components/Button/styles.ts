import React from "react";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: ${({theme})=>theme.colors.background};
    
    margin: 30px 30px 0 30px;
    padding: 15px;
    border-radius: 0px;
    
    justify-content: center;
    align-items: center;
    `;

export const ButtonText = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-size: 16px;
    font-weight: bold;
    
`;