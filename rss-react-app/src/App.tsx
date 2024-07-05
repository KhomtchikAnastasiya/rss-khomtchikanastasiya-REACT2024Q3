import { Component, ReactNode } from 'react';
import './App.css';
import SearchRequest from './components/SearchRequest/SerchRequest';
import SearchResponse from './components/SearchResponse/SearchResponse';

class App extends Component {
    state = {
        searchRequest: '',
        searchTrigger: false,
    };

    storageRequest = localStorage.getItem('search');

    changeRequest = (newRequest: string) => {
        this.setState((previousState) => ({
            ...previousState,
            searchRequest: newRequest,
        }));
    };

    changeTrigger = () => {
        localStorage.setItem('search', this.state.searchRequest);
        this.setState((previousState: App['state']) => ({
            ...previousState,
            searchTrigger: !previousState.searchTrigger,
        }));
    };

    componentDidMount() {}

    render(): ReactNode {
        return (
            <>
                <SearchRequest
                    changeRequest={this.changeRequest}
                    storageRequest={this.storageRequest}
                    changeTrigger={this.changeTrigger}
                />
                <SearchResponse />
            </>
        );
    }
}

export default App;
