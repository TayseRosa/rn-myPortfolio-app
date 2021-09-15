import React from 'react';
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular };
    font-weight: bold;
    font-size: 24px;
    color:${({ theme }) => theme.colors.background };

    margin:30px;
`;

export const Image = styled.Image`
    width: 250px;
    height: 300px;
    justify-content: center;
    align-items: center;

    margin:30px;
`;