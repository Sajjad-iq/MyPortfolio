import { createContext, ReactNode, SetStateAction, useState } from 'react'

type ProviderChildrenType = {
    children: ReactNode
}

export const Context = createContext<any>(0)

const ContextProvider = ({ children }: ProviderChildrenType) => {

    const [ProjectIndex, setProjectIndex] = useState<number>(0)
    const [IsPageActive, setIsPageActive] = useState<boolean>(false)

    return (
        <Context.Provider value={{ ProjectIndex, setProjectIndex, IsPageActive, setIsPageActive }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider