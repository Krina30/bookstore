import './App.css';
import {Routes ,Route ,BrowserRouter,Link} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Errorfound from './pages/Errorfound';
import logo from './logo.svg';
function App()
 {
  return (
   <BrowserRouter>
   <img src={logo}/>
   <div style={{padding: 5,display: "flex", columnGap: 10}}>
      <Link to="/">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/error">404 error</Link>
  </div>
   <Routes>
      <Route exact path="/" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path='/error' element={<Errorfound/>}/>
  </Routes>
   </BrowserRouter>
  );
}
export default App;