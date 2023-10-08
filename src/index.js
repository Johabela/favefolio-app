import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiProvider from './contexts/ApiContext' 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Media from './pages/Media';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          {/* home page */}
           <Route path="/" element={<App />}/>
          {/* set up dynamic route handling urls with .json suffix*/}
           <Route path="/:query.json" element={<Media />}/>
         </Routes>

      </BrowserRouter>

    </ApiProvider>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
