import { Component, ReactNode } from 'react';
import SearchRequest from '../components/SearchRequest/SerchRequest';
import SearchResponse from '../components/SearchResponse/SearchResponse';

class MainView extends Component {
    state = {
        searchRequest: '',
        hasError: false,
    };

    storageRequest = localStorage.getItem('search');
    isStorageTested = false;

    changeRequest = (newRequest: string) => {
        this.setState({
            searchRequest: newRequest,
            hasError: false,
        });
        localStorage.setItem('search', newRequest);
    };

    triggerError() {
        this.setState((prevState) => ({ ...prevState, hasError: true }));
    }

    componentDidMount() {
        if (this.storageRequest !== '' && this.isStorageTested === false) {
            this.setState({
                searchRequest: this.storageRequest,
                hasError: false,
            });
            this.isStorageTested = true;
        }
    }

    render(): ReactNode {
        if (this.state.hasError) {
            throw new Error('Error is triggered');
        }
        return (
            <>
                <SearchRequest changeRequest={this.changeRequest} />
                <SearchResponse
                    searchRequest={this.state.searchRequest}
                    key={this.state.searchRequest}
                />
                <button type="button" onClick={() => this.triggerError()}>
                    Trigger an error
                </button>
            </>
        );
    }
}

export default MainView;
