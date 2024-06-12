import { Route, Routes } from 'react-router-dom'
import Header from "./components/header";

import Home from "./pages/home";
import About from './pages/about';
import Project from './pages/project';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/project" exact element= {<Project/>}> </Route>
      </Routes>

    
    </>
  );
}

export default App;
