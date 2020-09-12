import React from 'react';


class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };
    static getDerivedStateFromError(error) {
        console.log('error', error);
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    render() {
        const { children } = this.props;
        const { hasError } = this.state;
        return hasError ? <p>Oops something went wrong</p> : children
    }
}
export default ErrorBoundary;