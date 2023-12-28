import { Route, Routes } from 'react-router-dom'
import Header from "./components/header";

import Home from "./pages/home";
import Blog from "./pages/blog";
import About from './pages/about';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/blog" exact element={<Blog />}/>
      </Routes>

    
    </>
  );
}

export default App;
