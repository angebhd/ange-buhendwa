import { Route, Routes } from 'react-router-dom'
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import Blog from "./pages/blog";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/blog" exact element={<Blog />}/>
      </Routes>

      <Footer />
    
    </>
  );
}

export default App;
