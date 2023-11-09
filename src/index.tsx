import App from 'app/app';
import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
