import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Root } from './root/root';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import "react-alice-carousel/lib/alice-carousel.css";

// import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <Router>
        <Root/>
      </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

