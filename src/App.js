
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './App.css';
import NaveCenter from './NaveBareCenter/NaveCenter';
import Home from './Accueil/Home';
import Footer from './footer/Footer';
import { ChevronUp } from 'lucide-react';
import NaveBareTop from './NaveBareTop/NaveBareTop';
import News from './News/News';
import Courses from './Courses/Course';
import Verifications from './Verification/Verifications';









function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <NaveCenter/>
           <NaveBareTop/>
           <Switch>
             <Route path = "/" exact component = {Home}/>
             <Route path = "/news"  component = {News}/>
             <Route path = "/courses"  component = {Courses}/>
             <Route path = "/verification"  component = {Verifications}/>
           </Switch>
           <Footer/>
      </BrowserRouter>
      <div className='chervro'>
      <span
        className="fixed bottom-4 right-4 bg-gray-300 text-white p-2 "
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp size={24} />
      </span>
    </div>
    </div>
  );
}

export default App;
