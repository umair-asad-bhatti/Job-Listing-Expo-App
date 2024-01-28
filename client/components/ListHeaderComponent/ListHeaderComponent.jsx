import { View, Text } from 'react-native'
import React from 'react'

export function ListHeaderComponent({ col1, col2 }) {
    return (
        <View className={'bg-blue-500  p-2 m-1 mb-4 flex flex-row justify-between items-center rounded-md shadow-md'}>
            <Text className={'font-bold text-white'}>{col1}</Text>
            <Text className={'text-white font-bold'}>{col2}</Text>
        </View>
    )
}