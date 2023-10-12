import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiProvider from './contexts/ApiContext' 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Media from './pages/Media';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import Restaurants from './pages/Restaurants'
import Books from './pages/Books';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          {/* Home page */}

           <Route path="/" element={<HomePage />}/>
           {/* MediaSearch Page */}
           <Route path="/:titleName" element={<Media />}/>
           {/* Restaurants */}
           <Route path="/" element={<Restaurants />}/>
           {/* Book & eBooks */}
           <Route path="/" element={<Books />}/>

           <Route path="/" element={<App />}/>
           {/* MediaSearch Page */}
           <Route path="/:titleName" element={<Media />}/>

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
