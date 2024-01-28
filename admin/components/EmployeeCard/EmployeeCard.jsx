import { View, Text } from 'react-native'
import React from 'react'

export function EmployeeCard({ employee }) {
    return (
        <View className={'bg-gray-100 p-2 m-1  flex flex-row justify-between items-center rounded-md shadow-md'}>
            <Text className={'my-1'}>{employee['Employee Name']}</Text>
            <Text className={'text-gray-600'}>{employee['Employee Number']}</Text>
        </View>
    )
}