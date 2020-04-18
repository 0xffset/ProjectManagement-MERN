import React from "react";


import { BrowserRouter, Route } from 'react-router-dom';
import Home from './core/Home';
import SignUp from './user/Signup';
import SignIn from './auth/Signin';
import Dashboard from './core/dashboard';

const App = (
   <BrowserRouter>
    <div>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin'  component={SignIn} />
          
    </div>
   </BrowserRouter>
)
export default App