import { db } from "../firebase/firebase"
import { collection, query, getDocs, where } from "firebase/firestore"
export const docExistsOrNot = async (collectionName, docField, operator, toBeComparedField) => {
    const CommunityRef = collection(db, collectionName)
    const q = query(CommunityRef, where(docField, operator, toBeComparedField))
    const querySnapshot = await getDocs(q)
    return querySnapshot.size > 0;
}