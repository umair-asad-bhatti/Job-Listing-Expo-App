import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '../components/Button/Button'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useFetchAllEmployees } from '../hooks/useFetchAllEmployees'
import { FlatList } from 'react-native'
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator'
import { EmployeeCard } from '../components/EmployeeCard/EmployeeCard'
import { ListHeaderComponent } from '../components/ListHeaderComponent/ListHeaderComponent'
export function Dashboard({ navigation }) {
    const { employees, isFetching, getEmployees } = useFetchAllEmployees()
    const [isRefreshing, setIsRefreshing] = useState(false)
    const handleRefresh = async () => {
        setIsRefreshing(true)
        await getEmployees()
        setIsRefreshing(false)
    }
    useEffect(() => {
        (async () => {
            await getEmployees()
        })()
    }, [])
    return (
        <View className='flex h-full bg-white '>
            <View className='py-2 mt-8 mb-4'>
                <Text className="text-4xl font-extrabold text-gray-600">Hey! <Text className='text-blue-500 underline'>Admin</Text></Text>
            </View>
            <View className='shadow border h-[70%] border-gray-300 rounded-lg p-2'>
                <FlatList
                    ListHeaderComponent={() => <ListHeaderComponent col1={'Employee Name'} col2={'Employee ID'} />}
                    refreshing={isRefreshing}
                    onRefresh={handleRefresh}
                    data={employees}
                    renderItem={({ item }) => {
                        return <EmployeeCard employee={item} />
                    }}
                    ListEmptyComponent={() => <LoadingIndicator color={'black'} size={50} />}
                />
            </View>
            <View>
                <View className='my-4'>
                    <Button disabled={false} onClickHandler={() => { signOut(auth); navigation.navigate("login") }}>
                        <Text className='text-white text-center'>Logout</Text>
                    </Button>
                </View>
                <View>

                    <Button disabled={false} onClickHandler={() => { signOut(auth); navigation.navigate("adminform") }}>
                        <Text className='text-white text-center '>Add Employees Data</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}