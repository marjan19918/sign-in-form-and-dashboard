import React, { createContext, useState } from 'react'
 export const UserContext = createContext()
export const UserContextProvider = props => {
    const [user, setUser] = useState([
        {
            username:'',
            id:'',
            credit: '',
            token: '',
            image: '',
            phoneNumber: '',
            email: '',
           

        
        }
    ])
    return (
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}