import './App.css';

import Dashboard from './pages/dashboard';
import Entrypage from './pages/entrypage';
import Login from './pages/login';
import Register from './pages/register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ViewProjects from './pages/viewproject';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Entrypage/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/viewprojects" element={<ViewProjects/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
