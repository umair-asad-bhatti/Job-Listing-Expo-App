import { useContext, useState } from "react";
import { showAlert } from '../utils/utils'
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../context/AuthContext";
import { auth } from '../firebase/firebase'
export const useAdmin = (navigationService) => {
    const { user, isLoading } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const handleLogin = async (email, passwrod) => {
        if (!email || !passwrod) {
            showAlert('Warning', 'Please fill all the fields')
            return
        }

        try {
            setIsSaving(true)
            const res = await signInWithEmailAndPassword(auth, email, password);
            navigationService.replace("dashboard")
        } catch (error) {
            showAlert('An Error Occured', error.message)
        } finally {
            setIsSaving(false)
            setEmail('')
            setPassword('')
        }
    }
    return { email, setEmail, password, setPassword, isSaving, handleLogin }
}