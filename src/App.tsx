import ErrorBoundary from './components/ErrorBoundary';
import MainView from './routes/root/Root';

function App() {
    return (
        <ErrorBoundary>
            <MainView />
        </ErrorBoundary>
    );
}
export default App;
