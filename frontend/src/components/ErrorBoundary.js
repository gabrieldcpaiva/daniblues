import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-elegant-cream flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">💜</div>
            <h2 className="text-2xl font-serif font-bold text-elegant-black mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We're sorry for the inconvenience. Please refresh the page or contact us.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Refresh Page
              </button>
              <a
                href="https://api.whatsapp.com/send/?phone=447403477724&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;