import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ComparisonProvider } from './components/Header/Comparison/ComparisonContext';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/aggregator">
      <ComparisonProvider>
        <App />
      </ComparisonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
