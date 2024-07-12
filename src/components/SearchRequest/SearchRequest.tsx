import { useState } from 'react';
import styles from './SearchRequest.module.css';
import { Form } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

function SearchRequest() {
    const [inputData, setInputData] = useState(useLocalStorage());
    useLocalStorage(inputData.trim());

    return (
        <Form
            id="search-form"
            role="search"
            className={`block ${styles.wrapper}`}
        >
            <input
                id="search"
                name="search"
                type="search"
                placeholder="Search"
                className={styles.input}
                defaultValue={inputData}
                onChange={(event) => setInputData(event.target.value)}
            />
            <button type="submit" className={styles.button}>
                Search
            </button>
        </Form>
    );
}

export default SearchRequest;
