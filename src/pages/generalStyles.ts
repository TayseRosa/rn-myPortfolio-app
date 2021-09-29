import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 20px;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size: 18px;
    color:${({theme}) => theme.colors.secondary};
    justify-content: center;
    align-items: center;
`;

export const TextMain = styled.Text`
    font-size: 16px;
    color:${({theme}) => theme.colors.font};
    padding: 20px 0;
    text-align: center;
`

export const Input = styled.TextInput`
    font-size:15px;
    border: 1px solid #f00;
    height: 50px;
    width: 90%;
    padding:15px;
`;

export const WrapperDev = styled.View`
    flex-direction: row;
    height: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
    `;

export const ImageDev = styled.Image`
    width: 200px;
    height: 250px;
    padding: 50px 5px;
    top: 50px;
    `;

export const Listing = styled.FlatList`
    margin: 20px 0;
`;


export const ImageDevResume = styled.Image`
    width: 350px;
    height: 350px;
    top: 20px;
`;

export const ModalBox = styled.View`
    width: 90%;
    height: 80%;
    background-color: ${({theme})=> theme.colors.background_light};
    margin: 0 auto;
    padding: 20px;
    top: 50px;
    border-radius: 10px;
`;

export const ModalTitle = styled.Text`
    color: ${({theme})=> theme.colors.secondary};
    font-size: 28px;
    text-align: center;
`;

export const ModalText = styled.Text`
    color: ${({theme})=> theme.colors.font};
    font-size: 20px;
`;

export const ModalButtonClose = styled.Button`
    
`