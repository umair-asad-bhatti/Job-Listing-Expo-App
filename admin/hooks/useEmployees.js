import { useState } from "react";
import { db } from '../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { showAlert } from '../utils/utils'
import { EmployeeModel } from "../models/EmployeeModel";
import { docExistsOrNot } from "../utils/utils";
export const useEmployees = () => {
    const [empName, setEmpName] = useState('')
    const [empNumber, setEmpNumber] = useState('')
    const [empPassword, setEmpPassword] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const saveEmployeeData = async (empName, empNumber, empPassword) => {
        if (!empPassword || !empName || !empNumber) {
            showAlert('Warning', 'Please fill all the fields')
            return
        }
        //store the data in firebase
        try {
            setIsSaving(true)
            //check if employee number is unique or not
            const DocExists = await docExistsOrNot('Employees', 'Employee Number', '==', empNumber)
            if (DocExists) {
                showAlert('Employee Number is not available', "Provide another employee number")
                return
            }
            const Employee = new EmployeeModel(empName, empPassword, empNumber)
            await addDoc(collection(db, 'Employees'), { ...Employee })
            setIsSaving(false)
            showAlert('Successful', "Employee Data has been saved successfully")
        } catch (error) {
            showAlert('An Error Occured', 'Check you internet connection')
        } finally {
            setIsSaving(false)
            setEmpName('')
            setEmpPassword('')
            setEmpNumber('')
        }
    }
    return { saveEmployeeData, empNumber, empPassword, isSaving, empName, setEmpName, setEmpPassword, setEmpNumber }
}