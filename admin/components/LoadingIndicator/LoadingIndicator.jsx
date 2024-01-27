import { View, ActivityIndicator } from 'react-native'
import React from 'react'

export default function LoadingIndicator({ size, color }) {
    return (
        <ActivityIndicator size={size} color={color} />
    )
}