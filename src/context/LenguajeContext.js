import React, { useState } from 'react'

const LenguajeContext = React.createContext({})

export function LenguajeContextProvider({ children}) {
    const [spanish, setSpanish] = useState(true);

    return(
        <LenguajeContext.Provider value={{spanish, setSpanish}}>
            {children}
        </LenguajeContext.Provider>
    );
}

export default LenguajeContext;