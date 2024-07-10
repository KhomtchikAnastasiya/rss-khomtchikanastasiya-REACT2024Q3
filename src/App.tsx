import { Component, ReactNode } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import MainView from './views/MainView';

class App extends Component {
    render(): ReactNode {
        return (
            <ErrorBoundary>
                <MainView />
            </ErrorBoundary>
        );
    }
}

export default App;
