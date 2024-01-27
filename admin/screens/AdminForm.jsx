import { Image, Text, View, ScrollView } from "react-native";
// const adminImage = require('../assets/adminSide.jpeg')
import { Information, Lock1, User } from "iconsax-react-native";
import InputField from "../components/InputField/InputField";
import { useEmployees } from "../hooks/useEmployees";
import { Button } from '../components/Button/Button'
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";
export const AdminForm = () => {
    const { empName, empNumber, empPassword, isSaving, setEmpName, setEmpNumber, setEmpPassword, saveEmployeeData } = useEmployees()
    return <ScrollView className="h-full bg-none flex rounded-md">
        <View className={'h-96 flex justify-center items-center'}>
            <Text className="text-2xl font-extrabold text-center text-blue-500">Enter Employees Details</Text>
            {/*<Image style={{ width: 150, height: 150 }} className={'rounded-full mx-auto my-6'} source={adminImage} />*/}
        </View>

        <View>
            <InputField type={'Enter Employee Name'} value={empName} setValue={setEmpName} >
                <User size={25} color={'grey'} />
            </InputField>

            <InputField type={'Enter Employee Number'} value={empNumber} setValue={setEmpNumber} >
                <Information size={25} color={'grey'} />
            </InputField>

            <InputField type={'Enter Employee password'} value={empPassword} setValue={setEmpPassword} >
                <Lock1 size={25} color={'grey'} />
            </InputField>
        </View>
        <Button disabled={isSaving} onClickHandler={() => saveEmployeeData(empName, empNumber, empPassword)} >
            {
                isSaving ? <LoadingIndicator size={25} color={'white'} /> : <Text className={'text-center text-gray-200  text-lg'}>Save</Text>
            }
        </Button>
    </ScrollView>
}