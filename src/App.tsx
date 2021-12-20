import {GlobalStyle} from './Global';
import {Header} from './Header';
import { News } from './News';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SportNews } from './SportNews';
import { HealthNews } from './HealthNews';
import { GeneralNews } from './GeneralNews';

function App() {
  return (
   
   <Router>
    <GlobalStyle />
    <Header category="HotNews Brasil"/>
     <Routes>
       <Route path="/hotnewsbr" element={<News />}></Route> 
         
          
       <Route path="/hotnewsbr/sports" element={<SportNews/>}></Route> 
          

       <Route path="/hotnews/saude" element={<HealthNews/>}></Route>
      
       
       <Route path="/hotnews/mundo" element ={<GeneralNews/>}></Route>
       
        
      
         
      </Routes>  
     
    </Router>
  );
}

export default App;
