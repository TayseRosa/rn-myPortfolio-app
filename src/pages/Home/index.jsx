import React from "react";
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }){
    return(
        <View>
            <Text>HOME SCREEN</Text>
            <Button 
                title="Go to perfil"
                onPress={() => navigation.navigate('Perfil')}
            />
        </View>
    );
}