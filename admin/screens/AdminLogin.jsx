import { Text, View, ScrollView } from "react-native";
import { Information, User } from "iconsax-react-native";
import InputField from "../components/InputField/InputField";
import { Button } from '../components/Button/Button'
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";
import { useAdmin } from '../hooks/useAdmin'
import { useEffect, useContext } from "react";
import { UserContext } from "../context/AuthContext";

export function AdminLogin({ navigation }) {
    const { email, setEmail, password, setPassword, isSaving, handleLogin } = useAdmin(navigation)
    const { user, isLoading } = useContext(UserContext)
    useEffect(() => {
        if (user)
            navigation.replace('dashboard')
    }, [])
    return (
        <ScrollView className="h-full bg-white rounded-md" >
            <View className={'flex h-[250px] justify-end py-8  gap-2'}>
                <Text className="text-4xl font-extrabold text-gray-600">Hey! <Text className='text-blue-500 underline'>Admin</Text></Text>
                {/* <UserAdd
                size="150"
                color="#3b82f6"
            /> */}
                {/*<Image style={{ width: 150, height: 150 }} className={'rounded-full mx-auto my-6'} source={adminImage} />*/}
            </View>
            <View>
                <Text className='my-2 text-md text-gray-600 font-bold'>Email</Text>
                <InputField type={'Enter email'} value={email} setValue={setEmail} >
                    <User size={25} color={'grey'} />
                </InputField>
                <Text className='my-2 text-md text-gray-600 font-bold'>Password</Text>
                <InputField type={'Enter password'} value={password} setValue={setPassword} >
                    <Information size={25} color={'grey'} />
                </InputField>

            </View>
            <View className='mt-4'>

                <Button disabled={isSaving} onClickHandler={() => handleLogin(email, password)} >
                    {
                        isSaving ? <LoadingIndicator size={25} color={'white'} /> : <Text className={'text-center text-gray-200  text-lg'}>Login</Text>
                    }
                </Button>
            </View>
        </ScrollView>
    )
}