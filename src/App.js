import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Page from './Containers/Page';
import Error from './Containers/Error';
import AboutMe from './Containers/AboutMe';
import ContactMe from './Containers/ContactMe';
import Projects from './Containers/Projects';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Page/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/contactme' element={<ContactMe/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path="/*" element={<Error/>}/>
          
        
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
