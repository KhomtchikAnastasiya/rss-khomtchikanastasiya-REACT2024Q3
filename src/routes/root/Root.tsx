import { useState } from 'react';
import SearchRequest from '../../components/SearchRequest/SearchRequest';
import SearchResponse from '../../components/SearchResponse/SearchResponse';
import { Outlet, useLoaderData } from 'react-router-dom';
import { ResposeData } from '../../types/types';
import styles from './Root.module.css';

function Root() {
    const { persons, search } = useLoaderData() as {
        persons: ResposeData;
        search: string;
    };

    const [hasError, setHasError] = useState(false);

    function triggerError(): void {
        setHasError(true);
    }

    if (hasError) {
        throw new Error('Error is triggered');
    }
    return (
        <>
            <SearchRequest />
            <div className={styles.content_wrapper}>
                <SearchResponse persons={persons.results} key={search} />
                <Outlet />
            </div>
            <button type="button" onClick={() => triggerError()}>
                Trigger an error
            </button>
        </>
    );
}

export default Root;
