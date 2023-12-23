import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Header from './Header'
import Footer from './Footer'
import Inventaris from './pages/inventaris';
import Member from './pages/member';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/member" element={<Member />} />
        <Route path="inventaris" element={<Inventaris />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
