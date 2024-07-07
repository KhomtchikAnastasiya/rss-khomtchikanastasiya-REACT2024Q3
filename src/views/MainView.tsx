import { Component, ReactNode } from 'react';
import SearchRequest from '../components/SearchRequest/SerchRequest';
import SearchResponse from '../components/SearchResponse/SearchResponse';
import Button from '../components/Button/Button';

class MainView extends Component {
    state = {
        searchRequest: '',
    };

    storageRequest = localStorage.getItem('search');
    isStorageTested = false;

    changeRequest = (newRequest: string) => {
        this.setState({
            searchRequest: newRequest,
        });
        localStorage.setItem('search', newRequest);
    };

    triggerError() {
        throw new Error('Error is triggered');
    }

    componentDidMount() {
        if (this.storageRequest !== '' && this.isStorageTested === false) {
            this.setState({
                searchRequest: this.storageRequest,
            });
            this.isStorageTested = true;
        }
    }

    render(): ReactNode {
        return (
            <>
                <SearchRequest changeRequest={this.changeRequest} />
                <SearchResponse
                    searchRequest={this.state.searchRequest}
                    key={this.state.searchRequest}
                />
                <Button
                    text="trigger an error"
                    onClick={this.triggerError}
                ></Button>
            </>
        );
    }
}

export default MainView;
