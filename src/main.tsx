import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// 應用 Tailwind 樣式到 body
document.body.className = 'm-0 w-full min-h-screen overflow-x-hidden antialiased font-custom-sans';

const rootElement = document.getElementById('root')!;
rootElement.className = 'w-full min-h-screen';

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); 