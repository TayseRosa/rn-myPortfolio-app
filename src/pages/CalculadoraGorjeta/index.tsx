import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Page = styled.View`
    flex:1;
    align-items: center;
`;

const HeaderText = styled.Text`
    font-size: 25px;
`;

const Input = styled.TextInput`
    width: 90%;
    height: 50px;
    font-size:18px;
    background-color: #121212;
    color:#fff;
    border-radius: 10px;
    padding: 10px;
`;

const CalcButton = styled.Button`
    width: 150px;
    height: 50px;
    
    background-color: #121212;
    border-radius: 5px;
    
    margin-top:20px;
    
    justify-content: center;
    align-items: center;
`;

const TextBtn = styled.Text`
    color:#fff;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

const ResultArea = styled.View`
    width: 100%;
    margin-top: 30px;
    background-color: #eee;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

const ResultItemTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

const ResultItem = styled.Text`
    font-size: 15px;
    margin-bottom: 30px;
`;

const PctArea = styled.View`
    flex-direction: row;
    margin:20px;
`;

const PctItem = styled.Button`
    
`;


export default () => {

    const [ bill, setBill ] = useState('')
    const [ tip, setTip ] = useState(0);

    const [ pct, setPct ] = useState(10);

    const calc = () => {
        let nBill = parseFloat(bill);
        
        if( nBill ){
            setTip( pct/100 * nBill)
        }
    }

    useEffect(()=>{
        calc();
    }, [ pct, bill ])

    return(
        <Page>
            <HeaderText>Calculadora de Gorjeta</HeaderText>

            <Input 
                placeholder="Quanto deu a conta"
                placeholderTextColor="#ccc"
                keyboardType="numeric"
                value={ bill }
                onChangeText={n=>setBill(n)}
            />

            <PctArea>
                <PctItem title="5%" onPress={()=>setPct(5)} />
                <PctItem title="10%" onPress={()=>setPct(10)} />
                <PctItem title="15%" onPress={()=>setPct(15)} />
                <PctItem title="20%" onPress={()=>setPct(20)} />
            </PctArea>

            { tip>0 && 
            <ResultArea>
                <ResultItemTitle> Valor da Conta </ResultItemTitle>
                <ResultItem> R${ parseFloat(bill).toFixed(2) } </ResultItem>

                <ResultItemTitle> Valor da Gorjeta </ResultItemTitle>
                <ResultItem> R${ tip.toFixed(2) } ({ pct }%) </ResultItem>

                <ResultItemTitle> Valor Total </ResultItemTitle>
                <ResultItem> R$ { (parseFloat(bill) + tip).toFixed(2)  } </ResultItem>

            </ResultArea>
            }
        </Page>
    );
}