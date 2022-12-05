import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const basicMath = [
  ['Дроби','/droby', 1],
  ['Дробные операции','/droby_oper', 2],
  ['Многоэтажные Дроби','/droby_mnogoetajnye', 3],
  ['Производные','/diff', 4],
  ['Функции','/functions', 5]
]

const mathAnalysis = [
  ['Дроби','/droby', 1],
  ['Производные','/diff', 2],
  ['Функции','/functions', 3]
]

const forImportArrs = [basicMath, mathAnalysis];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App forImportArrs={forImportArrs}/>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
