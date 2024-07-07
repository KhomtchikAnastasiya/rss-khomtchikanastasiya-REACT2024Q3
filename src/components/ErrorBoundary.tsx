import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface IState {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Sorry... there was an error</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
