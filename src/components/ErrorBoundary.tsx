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
            return <div className="block">Sorry... there was an error</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
