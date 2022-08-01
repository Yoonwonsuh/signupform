import logo from './logo.svg';
import './App.css';
import SignUpPage from './pages/Signuppage';
import LogiPage from './pages/Loginpage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (

    <Routes>
      <Route path="/" element={<LogiPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/main" element={<div>하이하이</div>} />
    </Routes>
    );
}

export default App;
