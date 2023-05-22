import './App.css';
import {Routes ,Route ,BrowserRouter,Link} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
function App()
 {
  return (
   <BrowserRouter>
   <div>
      <Link to="/">Register</Link>
      <Link to="/login">Login</Link>
  </div>
   <Routes>
      <Route exact path="/" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
  </Routes>
   </BrowserRouter>
  );
}
export default App;