import { db } from "../firebase/firebase"
import { collection, query, getDocs, where } from "firebase/firestore"
import { Alert } from "react-native"
export const docExistsOrNot = async (collectionName, docField, operator, toBeComparedField) => {
    const CommunityRef = collection(db, collectionName)
    const q = query(CommunityRef, where(docField, operator, toBeComparedField))
    const querySnapshot = await getDocs(q)
    return querySnapshot.size > 0;
}

export const showAlert = (title, message) => {
    Alert.alert(title, message, [
        {
            text: 'close',
            style: 'cancel',
        },
    ]);
}
