import './App.css';
import {routes ,route ,BrowserRouter,Link} from "react-router-dom";
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
   <routes>
      <route exact path="/" element={<Register/>}/>
      <route exact path="/login" element={<Login/>}/>
  </routes>
   </BrowserRouter>
  );
}
export default App;
