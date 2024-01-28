import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
const UserContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (authUser) => {

            if (authUser) {
                console.log('user found');
                setUser(authUser);

            } else {
                console.log('no user found');
                setUser(null);

            }
            // Set loading state to false once user data is loaded
            setIsLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export { AuthProvider, UserContext };
