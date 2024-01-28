import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Information, Lock1, User, ArrowLeft } from "iconsax-react-native";
import InputField from "../components/InputField/InputField";
import { useEmployees } from "../hooks/useEmployees";
import { Button } from '../components/Button/Button'
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";
export const AdminForm = ({ navigation }) => {
    const { empName, empNumber, empPassword, isSaving, setEmpName, setEmpNumber, setEmpPassword, saveEmployeeData } = useEmployees()
    return <ScrollView className="h-full bg-none rounded-md bg-white" >

        <View className={'flex h-[250px] justify-end py-8  gap-2'}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft
                    size="30"
                    color="black"
                    className='mb-16'
                />
            </TouchableOpacity>
            <Text className="text-4xl font-extrabold text-gray-600">Hey! <Text className='text-blue-500 underline'>Admin</Text></Text>
            <Text className="text-xl font-extrabold text-gray-600">Lets register new employees </Text>
            {/* <UserAdd
                size="150"
                color="#3b82f6"
            /> */}
            {/*<Image style={{ width: 150, height: 150 }} className={'rounded-full mx-auto my-6'} source={adminImage} />*/}
        </View>
        <View>
            <Text className='my-2 text-md text-gray-600 font-bold'>Employee Name</Text>
            <InputField type={'Enter Employee Name'} value={empName} setValue={setEmpName} >
                <User size={25} color={'grey'} />
            </InputField>

            <Text className='my-2 text-md text-gray-600 font-bold'>Employee Number</Text>
            <InputField type={'Enter Employee Number'} value={empNumber} setValue={setEmpNumber} >
                <Information size={25} color={'grey'} />
            </InputField>
            <Text className='my-2 text-md text-gray-600 font-bold'>Employee Password</Text>
            <InputField type={'Enter Employee password'} value={empPassword} setValue={setEmpPassword} >
                <Lock1 size={25} color={'grey'} />
            </InputField>
        </View>
        <View className='mt-4'>
            <Button disabled={isSaving} onClickHandler={() => saveEmployeeData(empName, empNumber, empPassword)} >
                {
                    isSaving ? <LoadingIndicator size={25} color={'white'} /> : <Text className={'text-center text-gray-200  text-lg'}>Save</Text>
                }
            </Button>
        </View>
    </ScrollView>

}