import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '../components/Button/Button'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
export function Dashboard({ navigation }) {
    return (
        <View className='flex h-full bg-white '>
            <Text className='my-4'>Dashboard</Text>
            <Button disabled={false} onClickHandler={() => { signOut(auth); navigation.navigate("login") }}>
                <Text className='text-white text-center'>Logout</Text>
            </Button>
            <View className='my-4'>
                <Button disabled={false} onClickHandler={() => { signOut(auth); navigation.navigate("adminform") }}>
                    <Text className='text-white text-center '>Add Employees Data</Text>
                </Button>
            </View>

        </View>
    )
}