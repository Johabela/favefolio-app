import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiProvider from './contexts/ApiContext' 
import Media from './pages/Media';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import Restaurants from './pages/Restaurants'
import Books from './pages/Books';
import MediaStorage from './pages/MediaStorage';
import Navbar from './components/Navbar'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ApiProvider>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
           <Route path="/" element={<HomePage />}/>
           <Route path="/:titleName" element={<Media />}/>
           <Route path="/:titleName/storage" element={<MediaStorage />}/>
           <Route path="/restaurants" element={<Restaurants />}/>
           <Route path="/books" element={<Books />}/>
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
