import { useEffect, useState } from "react";


export const useStateWithLocalStorage = localStorageKey => {
        const [value, setValue] = useState(
            JSON.parse(sessionStorage.getItem(localStorageKey)) || ""
        );
        
        useEffect(() => {
            sessionStorage.setItem(localStorageKey, JSON.stringify(value));
            // setTimeout(() => {
            //     sessionStorage.removeItem(localStorageKey)
            // },60000)
        }, [value]);
        
        return [value, setValue];
};