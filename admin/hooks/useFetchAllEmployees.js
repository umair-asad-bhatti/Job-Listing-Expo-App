import { useState } from "react"
import { getDocs, collection } from 'firebase/firestore'
import { db } from "../firebase/firebase"
export const useFetchAllEmployees = () => {
    const [employees, setEmployees] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const getEmployees = async () => {
        setIsFetching(true)
        const employeesSnapshot = await getDocs(collection(db, 'Employees'));
        const data = []
        employeesSnapshot.forEach((employee) => {
            data.push({ id: employee.id, ...employee.data() })
        })
        setIsFetching(false)
        setEmployees(data)
    }
    return { employees, isFetching, getEmployees }
}