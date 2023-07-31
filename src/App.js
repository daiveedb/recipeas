import Navbar from "./components/Navbar";
import { Route, Routes, Router } from 'react-router-dom'
import Home from "./pages/Home";
import Categories from "./pages/Categories"

function App() {
  return (
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}>
            <Route path=":category"/>
          </Route>
        </Routes>
  );
}

export default App;
