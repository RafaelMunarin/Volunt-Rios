import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUserFromStorage = async () => {
            const storedUser = await AsyncStorage.getItem('loggedUser')
            if (storedUser) {
                setUser(JSON.parse(storedUser))
            }
        }
        loadUserFromStorage()
    }, [])

    const saveUser = async (userData) => {
        setUser(userData)
        await AsyncStorage.setItem('loggedUser', JSON.stringify(userData))
    };

    const logoutUser = async () => {
        setUser(null)
        await AsyncStorage.removeItem('loggedUser')
    }

    return (
        <UserContext.Provider value={{ user, saveUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}
