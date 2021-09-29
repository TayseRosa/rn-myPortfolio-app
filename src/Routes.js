import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import About from './pages/About';
import WorkingExperience from './pages/WorkingExperience';
import Courses from './pages/Courses';
import MyResume from './pages/MyResume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import TelaAsyncStorage from './pages/TelaAsyncStorage';
import CalculadoraGorjeta from './pages/CalculadoraGorjeta';

import Promisse from './pages/Promisse';

import InputButtonStates from './pages/InputButtonStates';

import { Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor:'#444',
                    borderTopColor:'#444',
                    paddingTop:5,
                    paddingBottom:5,
                },
                tabBarActiveTintColor:'#ffffff',
                tabBarInactiveTintColor:'#DA76AD',
                }}
        >

            <Tab.Screen 
                name="About" 
                component={About} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="Experiences" 
                component={WorkingExperience} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="Courses" 
                component={Courses} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="edit" size={size} color={color} />
                    )
                }}
            />
            
            <Tab.Screen 
                name="Resume" 
                component={MyResume} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="file-text" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="Portfolio" 
                component={Portfolio} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="coffee" size={size} color={color} />
                    )
                }}    
            />

            <Tab.Screen 
                name="Contato" 
                component={Contact} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="share-2" size={size} color={color} />
                    )
                }}    
            />

            <Tab.Screen 
                name="CalculadoraGorjeta" 
                component={CalculadoraGorjeta} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="share-2" size={size} color={color} />
                    )
                }}    
            />

        </Tab.Navigator>
    );
}