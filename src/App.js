import { Route, Routes } from 'react-router-dom'
import Header from "./components/header";

import Home from "./pages/home";
import About from './pages/about';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
      </Routes>

    
    </>
  );
}

export default App;
