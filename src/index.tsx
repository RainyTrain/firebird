import App from 'app/app';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { store } from 'app/providers/store/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './app/styles/index.scss';

const root = createRoot(document.getElementById('root')!);
root.render(
  <HashRouter>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </HashRouter>,
);
