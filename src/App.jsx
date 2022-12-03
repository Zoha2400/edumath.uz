import {React, useState, useEffect} from "react";
import './app.scss';
import Header from "./Components/Header/Header";
import ImportantPage from "./Components/ImportantPage/ImportantPage";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Math from "./Components/Math/Math";
import Error from "./Components/Error/Error";
import Droby from "./Components/Math/math-content/mathThemes/Droby";
import Diff from "./Components/Math/math-content/mathThemes/Diff";

function App(props) {
  
const [theme, setTheme] = useState(true);
let body = document.querySelector('body');


if(!theme){
  body.style.backgroundColor = "#131313";
}else{
  body.style.backgroundColor = "#ffffff";
}

return (
      <div className={theme ? 'App day' : 'App night'}>
        <Header theme={theme} setTheme={setTheme} forImportArrs={props.forImportArrs}/>

        <div className="Content">

          <Routes>
            <Route path="/" element={<ImportantPage/>}/>
            <Route path="Math" element={<Math forImportArrs={props.forImportArrs}/>}>
              <Route path='droby' element={<Droby/>}/>
              <Route path='diff' element={<Diff/>}/>
            </Route>
            <Route path="Math/:id" element={<Math/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
          
          
        </div>

        <Footer theme={theme}/>
      </div>
  );
}

export default App;
