import { Text, View, ScrollView } from "react-native";
import { Information, User } from "iconsax-react-native";
import InputField from "../components/InputField/InputField";
import { Button } from '../components/Button/Button'
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";
import { useLogin } from '../hooks/useLogin'
import { useEffect, useContext } from "react";
import { UserContext } from "../context/AuthContext";

export function LoginScreen({ navigation }) {
    const { employeeNumber, setEmployeeNumber, password, setPassword, isSaving, handleLogin } = useLogin(navigation)
    const { user, isLoading } = useContext(UserContext)
    useEffect(() => {
        if (user)
            navigation.replace('dashboard')
    }, [])
    return (
        <ScrollView className="h-full bg-white rounded-md" >
            <View className={'flex h-[250px] justify-end py-8  gap-2'}>
                <Text className="text-4xl font-extrabold text-gray-600">Welcome <Text className='text-blue-500 underline'>Back</Text></Text>
                <Text className='text-xl my-2 font-semibold text-gray-700'>You can login here</Text>
            </View>
            <View>
                <Text className='my-2 text-md text-gray-600 font-bold'>Employee Number</Text>
                <InputField type={'Enter email'} value={employeeNumber} setValue={setEmployeeNumber} >
                    <User size={25} color={'grey'} />
                </InputField>
                <Text className='my-2 text-md text-gray-600 font-bold'>Password</Text>
                <InputField type={'Enter password'} value={password} setValue={setPassword} >
                    <Information size={25} color={'grey'} />
                </InputField>

            </View>
            <View className='mt-4'>

                <Button disabled={isSaving} onClickHandler={() => handleLogin(employeeNumber, password)} >
                    {
                        isSaving ? <LoadingIndicator size={25} color={'white'} /> : <Text className={'text-center text-gray-200  text-lg'}>Login</Text>
                    }
                </Button>
            </View>
        </ScrollView>
    )
}