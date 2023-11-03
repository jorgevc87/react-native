// Definir como luce, qué información tendré aquí

import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer"

export interface AuthState {
    isLoggedIn: boolean
    userName?: string
    favoriteIcon?: string
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined
}

//Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState
    signIn: () => void
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const funcionVacia = () => { }

    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: funcionVacia
        }}>
            {children}
        </AuthContext.Provider>
    )
}

