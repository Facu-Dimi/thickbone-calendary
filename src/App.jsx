import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import Register from "./components/Register"
import LoginPage from "./components/LoginPage"




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
