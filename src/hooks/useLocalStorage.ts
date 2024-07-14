import { useEffect, useState } from 'react';

function useLocalStorage(newValue?: string) {
    const [searchValue, setSearchValue] = useState(
        localStorage.getItem('search') || ''
    );

    useEffect(() => {
        localStorage.setItem('search', newValue || '');
        setSearchValue(newValue || '');
    }, [newValue]);
    return searchValue;
}

export default useLocalStorage;
