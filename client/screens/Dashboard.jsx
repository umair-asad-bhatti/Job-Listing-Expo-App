import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '../components/Button/Button'
export function Dashboard({ navigation, route }) {
    const { data } = route.params
    console.log(data[0]["Employee Name"]);
    return (
        <View className='h-full bg-white'>
            <Text>welcome back {data[0]["Employee Name"]}</Text>
            <Button disabled={false} onClickHandler={() => navigation.replace("login")}>
                <Text className='text-center text-white'>Logout</Text>
            </Button>
        </View>
    )
}