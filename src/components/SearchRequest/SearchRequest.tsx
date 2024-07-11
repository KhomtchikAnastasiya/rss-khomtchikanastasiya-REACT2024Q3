import { useState } from 'react';
import styles from './SearchRequest.module.css';

interface Props {
    changeRequest: (newRequest: string) => void;
}

function SearchRequest({ changeRequest }: Props) {
    const [inputData, setInputData] = useState(
        localStorage.getItem('search') || ''
    );

    return (
        <div className={`block ${styles.wrapper}`}>
            <input
                type="text"
                placeholder={'Search'}
                className={styles.input}
                value={inputData}
                onChange={(event) => setInputData(event.target.value)}
            />
            <button
                type="button"
                className={styles.button}
                onClick={() => changeRequest(inputData.trim())}
            >
                Search
            </button>
        </div>
    );
}

export default SearchRequest;
