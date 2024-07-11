import ErrorBoundary from './components/ErrorBoundary';
import MainView from './views/MainView';

function App() {
    return (
        <ErrorBoundary>
            <MainView />
        </ErrorBoundary>
    );
}
export default App;
