import React from "react";
import ReactDom from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './core/Home';
import Menu from './core/Menu'
import SignUp from './user/Signup';
import SignIn from './auth/Signin';

const App = (
   <BrowserRouter>
    <div>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin'  component={SignIn} />
    </div>
   </BrowserRouter>
)
export default App