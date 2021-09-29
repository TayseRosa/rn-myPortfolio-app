import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color:#000;
    justify-content: center;
    align-items: center;
`;

export const TextMain = styled.Text`
    font-size: 16px;
    padding: 20px 0;
    text-align: center;
`;

export const Input = styled.TextInput`
    width: 200px;
    height: 50px;
    border: 3px solid #f00;
`;

export const Quadrado = styled.View`
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;
    border: 3px dashed #000;
    margin-top:30px;
`;