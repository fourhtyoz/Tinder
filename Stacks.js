import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import ChatScreen from './src/screens/ChatScreen'
import LoginScreen from './src/screens/LoginScreen'
import useAuth from './src/hooks/useAuth'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const Stacks = () => {
    const { user } = useAuth()
    return (
        <Stack.Navigator>
            {user 
            ? 
            <>
               <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Chat' component={ChatScreen} />
            </>
            :
            <>
                <Stack.Screen name='Login' component={LoginScreen} />
            </>
            }
        </Stack.Navigator>
    )
}

export default Stacks