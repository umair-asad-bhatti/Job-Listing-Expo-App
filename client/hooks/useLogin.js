import { useState } from 'react';
import { showAlert } from '../utils/utils';
import { where, doc, getDocs, collection, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { docExistsOrNot } from '../utils/utils';
export const useLogin = (navigationService) => {

    const [employeeNumber, setEmployeeNumber] = useState('')
    const [password, setPassword] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const handleLogin = async (employeeNumber, password) => {
        if (!employeeNumber || !password) {
            showAlert('Warning', 'Please fill all the fields')
            return
        }

        try {
            setIsSaving(true)
            //now login here
            const q = query(collection(db, 'Employees'), where('Employee Number', '==', employeeNumber), where('Employee Password', '==', password))
            const snapshot = await getDocs(q)
            if (snapshot.size == 0) {
                showAlert('Invaid Credentials.', 'Provide Correct employee number and password')
                return;
            }
            const data = []
            snapshot.forEach(snap => {
                data.push({ id: snap.id, ...snap.data() })
            })
            navigationService.replace("dashboard", { data })
        } catch (error) {
            showAlert('An Error Occured', error.message)
        } finally {
            setIsSaving(false)
            setEmployeeNumber('')
            setPassword('')
        }
    }
    return { employeeNumber, setEmployeeNumber, password, setPassword, isSaving, handleLogin }
}