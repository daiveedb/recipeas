import { Route, Routes, Router } from 'react-router-dom'
import Home from "./pages/Home";
import Categories from "./pages/Categories"
import CategoryPage from "./pages/CategoryPage";
import RecipePage from './pages/RecipePage';

function App() {
  return (
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/categories/:categoryid" element={<CategoryPage/>}/>
          <Route path=":recipeid" element={<RecipePage/>}/>
        </Routes>
  );
}

export default App;
