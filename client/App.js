import React from "react";
import ReactDom from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './core/Home';
import Menu from './core/Menu'

const App = (
   <BrowserRouter>
    <div>
          <Route path='/' exact component={Home} />
    </div>
   </BrowserRouter>
)
export default App