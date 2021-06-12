import { useEffect, useState } from 'react';

function useLocalStorageState(key, defaultVal) {
    // make piece of state based of value in localstorage (or default)
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        } catch (e) {
            val = defaultVal;
        }
        return val;
    });
    // use useEffect to update localstorage when state changes:
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}

export default useLocalStorageState;