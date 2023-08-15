import { Route, Routes, Router } from 'react-router-dom'
import Home from "./pages/Home";
import Categories from "./pages/Categories"
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/categories/:categoryid" element={<CategoryPage/>}/>
        </Routes>
  );
}

export default App;
