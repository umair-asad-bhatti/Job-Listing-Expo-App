import { useState } from "react";
import { db } from '../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { Alert } from 'react-native'
import { EmployeeModel } from "../models/EmployeeModel";
import { docExistsOrNot } from "../utils/utils";
export const useEmployees = () => {
    const [empName, setEmpName] = useState('')
    const [empNumber, setEmpNumber] = useState('')
    const [empPassword, setEmpPassword] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const saveEmployeeData = async (empName, empNumber, empPassword) => {
        if (!empPassword || !empName || !empNumber) {
            Alert.alert('Warning', "Please fill all the fields", [
                {
                    text: 'close',
                    style: 'cancel',
                },
            ]);
            return
        }

        //store the data in firebase
        try {
            setIsSaving(true)
            //check if employee number is unique or not
            const DocExists = await docExistsOrNot('Employees', 'Employee Number', '==', empNumber)
            if (DocExists) {
                Alert.alert('Employee Number is not available', "Provide another employee number", [
                    {
                        text: 'close',
                        style: 'cancel',
                    },
                ]);
                return
            }
            const Employee = new EmployeeModel(empName, empPassword, empNumber)
            await addDoc(collection(db, 'Employees'), { ...Employee })
            setIsSaving(false)
            Alert.alert('Successful', "Employee Data has been saved successfully", [
                {
                    text: 'close',
                    style: 'cancel',
                },
            ]);
        } catch (error) {
            Alert.alert("Error occured check your internet connection")
        } finally {
            setIsSaving(false)
            setEmpName('')
            setEmpPassword('')
            setEmpNumber('')
        }
    }
    return { saveEmployeeData, empNumber, empPassword, isSaving, empName, setEmpName, setEmpPassword, setEmpNumber }
}