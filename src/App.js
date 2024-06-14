import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Footer from './components/footer';
import Blog from './pages/blog';



function App() {
  return (
    <>
         
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/home" exact element={<Home/>}/>

        <Route path="/blog" exact element={<Blog/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
