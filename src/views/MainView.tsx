import { useState } from 'react';
import SearchRequest from '../components/SearchRequest/SearchRequest';
import SearchResponse from '../components/SearchResponse/SearchResponse';

function MainView() {
    const [searchRequest, setSearchRequest] = useState(
        localStorage.getItem('search') || ''
    );
    const [hasError, setHasError] = useState(false);

    function changeRequest(newRequest: string): void {
        setSearchRequest(newRequest);
        localStorage.setItem('search', newRequest);
    }

    function triggerError(): void {
        setHasError(true);
    }

    if (hasError) {
        throw new Error('Error is triggered');
    }
    return (
        <>
            <SearchRequest changeRequest={changeRequest} />
            <SearchResponse searchRequest={searchRequest} key={searchRequest} />
            <button type="button" onClick={() => triggerError()}>
                Trigger an error
            </button>
        </>
    );
}

export default MainView;
