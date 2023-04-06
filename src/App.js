import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Top from './components/Top';
import Quote_generator from './components/Quote_generator';
import Full_pages from './components/pages/Full_pages';
import Last from './components/Last';
import Bookmarked from './components/pages/Bookmarked';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>

<Route path='/top' element={<Top/>}/>
<Route path='/Quote' element={<Quote_generator/>}/>
<Route path='/' element={<Full_pages/>}/>
<Route path='/last' element={<Last/>}/>
<Route path='/bookmarks' element={<Bookmarked/>}/>
<Route path='/bookmarksQuotes' element={<Bookmarked/>}/>







</Routes>
    
    </BrowserRouter>
   

   </>
  );
}

export default App;
