import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import './css/App.css';
import App from './route/Route';
import './css/mediaQuery.css'
import './css/kisancreditcard.css'
import './constants/prototype'
import "../node_modules/video-react/dist/video-react.css";

// lazy loader
const renderLoader = () => {
  return (
    <div className="preloader" id="preloader">
      <div className="preloader-inner">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      </div>
    </div>
  )
}

function Root() {
  return (
    <div>
    <div className='full-body'>
      <Router basename='kisancreditcard'>
        <Suspense fallback={renderLoader()}>
          <App />
        </Suspense>
      </Router>
    </div>
    </div>
  )
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('UserDetails'));
