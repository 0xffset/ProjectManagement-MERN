import React from "react";
import ReactDom from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './core/Home';
import Menu from './core/Menu'
import SignUp from './user/Signup';

const App = (
   <BrowserRouter>
    <div>
          <Route path='/' exact component={SignUp} />
    </div>
   </BrowserRouter>
)
export default App