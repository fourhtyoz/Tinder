import React, { useContext, createContext } from "react"

const AuthContext = createContext(
    {
        user: null
    }
)

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider 
            value={{user: 'hi'}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}