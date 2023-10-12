

import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';

// React Router parts: 
// 1. Browser Router needs to exit higher up in the component tree than whatever we are writing is in Routes 
// 2. Routes need to exits, determine what content is rendered on with route example:  /restaurants for <Restaurants / >    
// 3. Route specifies URL component, belongs to Routes 

function App() {
  return (
    <div className="App">

      {/* <Routes>
        <Route path= "/" element={<HomePage/>} />



      </Routes> */}

    </div>
  );
}

export default App;